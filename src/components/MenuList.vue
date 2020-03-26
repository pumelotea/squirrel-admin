<template>
  <div class="menu-list-container">
    <el-menu
      :default-active="activeMenu[activeMenu.length - 1]"
      :default-openeds="activeMenu"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="goto"
    >
      <MenuContent v-for="e in menuTree" :data="e" :key="e.routerPath"/>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuContent from './MenuContent'
import { findMenuByMenuId } from '../utils/router-util'
export default {
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
  mounted() {

  }
}
</script>

<style scoped>
.menu-list-container {
  height: 100%;
  overflow: auto;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
}
</style>

<style>
.menu-list-container .el-menu {
  border-right: none;
}
</style>
