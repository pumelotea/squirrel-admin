<template>
  <PageLayout>
    <pre>{{list}}</pre>
  </PageLayout>
</template>

<script>
import PageLayout from '../../layouts/PageLayout'
import {forEachMenuTree} from "../../utils/router-util";

export default {
  name: 'index',
  components: {
    PageLayout
  },
  data() {
    return {
      list: [
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
          path: '/user-mgt', //TODO  这个路径要拼接进实际的路由 //如果父节点为空，那么久产生一个临时的
          view: '',
          isRouter: false,
          isKeepalive: false,
          children: [
            {
              name: '高级管理',
              path: '/adv',
              view: '',
              isRouter: false,
              isKeepalive: false,
              children: [
                {
                  name: '高级111',
                  path: '/xxxxxx111',
                  view: '/xxxxxx111',
                  isRouter: true,
                  isKeepalive: false,
                  children: []
                }
              ]
            },
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
            }
          ]
        },
        {
          name: '测试管理',
          path: '', //TODO  这个路径要拼接进实际的路由 //如果父节点为空，那么久产生一个临时的
          view: '',
          isRouter: false,
          isKeepalive: false,
          children: [
            {
              name: '测试项目组',
              path: '/test/aaa',
              view: '/test/aaa',
              isRouter: true,
              isKeepalive: false,
              children: []
            }
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
  },
  mounted() {
    forEachMenuTree(this.list)

  }
}
</script>

<style scoped></style>
