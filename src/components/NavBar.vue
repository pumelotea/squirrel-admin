<template>
  <div class="nav-bar-container">
    <div class="nav-wrap">
      <div style="color: #bdbdbd" v-if="navList.length === 0">
        点击左侧菜单打开页面
      </div>
      <el-tabs
        v-model="activeTab"
        type="card"
        closable
        @edit="handleTabsEdit"
        @tab-click="goto"
      >
        <el-tab-pane
          :key="item.name"
          v-for="(item, index) in navList"
          :label="item.name"
          :name="item.name"
          :path="item.path"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-button type="text" size="small"
            ><i class="el-icon-error" style="font-size: 20px"></i
          ></el-button>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="closeTabs('all')"
            >关闭全部</el-dropdown-item
          >
          <el-dropdown-item @click.native="closeTabs('left')"
            >关闭左侧</el-dropdown-item
          >
          <el-dropdown-item @click.native="closeTabs('right')"
            >关闭右侧</el-dropdown-item
          >
          <el-dropdown-item @click.native="closeTabs('other')"
            >关闭其他</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      activeTab: ''
    }
  },
  computed: {
    ...mapGetters(['navList', 'isOpenedRoute', 'activeRoute'])
  },
  watch: {
    activeRoute() {
      this.activeTab = this.activeRoute.name
    }
  },
  methods: {
    handleTabsEdit(targetName, action) {
      console.log(targetName)

      if ('remove' === action) {
        let index = this.navList.findIndex(e => {
          return e.name === targetName
        })
        //删除tab
        this.$store.commit('removeNav', index)

        //如果删除的是激活的路由
        if (targetName === this.activeRoute.name) {
          //倒退路由
          let preIndex = 0
          if (index > 0) {
            preIndex = index - 1
          }
          let preRoute = this.navList[preIndex]
          if (preRoute) {
            //设置激活路由
            this.$store.commit('setActiveRoute', preRoute)
            this.$store.commit('setActiveMenu', preRoute.menuPath)
            this.$router.push(preRoute.path)
          } else {
            this.$router.push('/')
          }
        }
      }
    },
    goto({ name, $attrs: { path } }) {
      let index = this.navList.findIndex(e => {
        return e.name === name
      })

      //设置激活路由
      this.$store.commit('setActiveRoute', this.navList[index])
      this.$store.commit('setActiveMenu', this.navList[index].menuPath)

      //跳转
      this.$router.push(path)
    },
    closeTabs(type) {
      if (type === 'all') {
        this.$router.push('/')
      }
      this.$store.commit('removeNavAdvance', type)
    }
  },
  mounted() {
    if (this.activeRoute) {
      this.activeTab = this.activeRoute.name
    }
  }
}
</script>

<style scoped>
.nav-bar-container {
  padding: 0 5px;
  display: flex;
  align-items: center;
  align-content: center;
  height: 100%;
  box-sizing: border-box;
}
</style>

<style>
.nav-bar-container .el-tabs__header {
  margin: 0;
}

.nav-bar-container .el-tabs--card > .el-tabs__header {
  /*border-bottom-color: transparent;*/
}

.nav-wrap {
  flex: 1;
  overflow: auto;
  display: flex;
  align-items: center;
}
</style>
