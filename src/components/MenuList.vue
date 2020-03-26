<template>
  <div class="menu-list-container">
    <el-menu
      :default-active="activeMenu[activeMenu.length - 1]"
      :default-openeds="uniqueOpened?activeMenu:null"
      :unique-opened="false"
      :collapse="isCollapse"
      :collapse-transition="false"
      @select="goto"
    >
      <template v-for="e in menuTree">
        <el-menu-item v-if="e.isRouter" :index="e.menuId">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ e.name }}</span>
        </el-menu-item>

        <el-submenu :index="e.menuId" v-else>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ e.name }}</span>
          </template>
          <MenuContent v-for="a in e.children" :data="a" />
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuContent from './MenuContent'
import { findMenuByMenuId } from '../utils/router-util'
export default {
  props:{
    uniqueOpened: {
      type:Boolean,
      default:false
    }
  },
  components: {
    MenuContent
  },
  computed: {
    ...mapGetters([
      'navList',
      'isOpenedRoute',
      'menuTree',
      'activeMenu',
      'tabNameMappings',
      'isCollapse'
    ])
  },
  methods: {
    goto(index, indexPath) {
      // console.log(indexPath)

      let node = findMenuByMenuId(this.menuTree, index)

      //尝试创建tab
      let tab = {
        name: this.tabNameMappings[node.routerPath].name,
        path: node.routerPath,
        menuPath: JSON.parse(JSON.stringify(indexPath))
      }

      // console.log(tab)

      //判断是否打开过
      if (!this.isOpenedRoute(tab)) {
        this.$store.commit('pushNav', tab)
      }

      //设置激活路由
      this.$store.commit('setActiveRoute', tab)
      this.$store.commit('setActiveMenu', tab.menuPath)
      //跳转
      this.$router.push(node.routerPath)
    }
  },
  mounted() {}
}
</script>

<style scoped>
.menu-list-container {
  height: 100%;
  overflow: auto;
}
</style>

<style>
.menu-list-container .el-menu {
  border-right: none;
}
</style>
