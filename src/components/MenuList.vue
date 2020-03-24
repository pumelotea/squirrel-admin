<template>
  <div class="menu-list-container">
    <el-menu
      :default-active="activeMenu[activeMenu.length-1]"
      :default-openeds="activeMenu"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="goto"
    >
      <MenuContent/>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuContent from './MenuContent'
export default {
  components:{
    MenuContent
  },
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapGetters([
      'navList',
      'isOpenedRoute',
      'setActiveRoute',
      'routerMappings',
      'activeMenu'
    ])
  },
  methods: {
    goto(index, indexPath) {
      console.log(indexPath)
      //TODO 这些数据是通过路由获取
      let mapx = {
        '/user': '用户管理',
        '/dashboard': '看板',
        '/role': '角色管理',
        '/department': '部门管理',
        '/menu': '菜单管理'
      }
      //尝试创建tab
      let tab = {
        name: mapx[index],
        path: index,
        menuPath:JSON.parse(JSON.stringify(indexPath))
      }

      //判断是否打开过
      if (!this.isOpenedRoute(tab)) {
        this.$store.commit('pushNav', tab)
      }

      //设置激活路由
      this.$store.commit('setActiveRoute', tab)

      //跳转
      this.$router.push(index)
    }
  }
}
</script>

<style scoped>
.menu-list-container {
  height: 100%;
  overflow: scroll;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
}
</style>

<style>
.menu-list-container .el-menu {
  border-right: none;
}
</style>
