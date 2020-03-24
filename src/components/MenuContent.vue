<template>
  <div>
    <template v-for="menu in data">
      <el-menu-item v-if="menu.isRouter" :index="menu.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ menu.name }}</span>
      </el-menu-item>
      <el-submenu :index="menu.path" v-else>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ menu.name }}</span>
        </template>
        <menu-content :data="menu.children" />
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          {
            name: '看板',
            path: '/dashboard',
            view: '/dashboard',
            isRouter: true,
            isKeepalive: false,
            children: []
          },
          {
            name: '用户',
            path: '/user-mgt', //TODO  这个路径要拼接进实际的路由
            view: '',
            isRouter: false,
            isKeepalive: false,
            children: [
              {
                name: '角色管理',
                path: '/role',
                view: '/role',
                isRouter: true,
                isKeepalive: false,
                children: []
              },
              {
                name: '菜单管理',
                path: '/menu',
                view: '/menu',
                isRouter: true,
                isKeepalive: false,
                children: []
              },
              {
                name: '用户管理',
                path: '/user',
                view: '/user',
                isRouter: true,
                isKeepalive: false,
                children: []
              },
            ]
          },
          {
            name: '部门管理',
            path: '/department',
            view: '/department',
            isRouter: true,
            isKeepalive: false,
            children: []
          }
        ]
      }
    }
  },
  name: 'MenuContent'
}
</script>

<style scoped></style>
