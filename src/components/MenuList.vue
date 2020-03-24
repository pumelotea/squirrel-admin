<template>
  <div class="menu-list-container">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      @select="goto"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="dashboard">看板</el-menu-item>

          <el-menu-item index="user">用户管理</el-menu-item>
          <el-menu-item index="role">角色管理</el-menu-item>
          <el-menu-item index="menu">菜单管理</el-menu-item>
          <el-menu-item index="department">部门管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapGetters(['navList', 'isOpenedRoute','setActiveRoute'])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    goto(index, indexPath) {
      let mapx = {
        user: '用户管理',
        dashboard: '看板',
        role: '角色管理',
        department: '部门管理',
        menu: '菜单管理',
      }

      //尝试创建tab
      let tab = {
        name: mapx[index],
        path: index
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
