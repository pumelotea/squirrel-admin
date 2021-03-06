import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '*',
      component: () => import('@/views/404')
    },
    {
      path: '/login',
      component: () => import('@/views/login')
    },

    {
      path: '/403',
      component: () => import('@/views/403')
    },
    {
      path: '/500',
      component: () => import('@/views/500')
    },
    {
      path: '/',
      home: true, //主页标记
      component: () => import('@/views/home'),
      children: [
        // {
        //   name: '看板',
        //   path: '/dashboard',
        //   component: () => import('@/views/dashboard')
        // },
        // {
        //   name: '用户管理',
        //   path: '/user',
        //   component: () => import('@/views/user/index.vue')
        // },
        // {
        //   name: '角色管理',
        //   path: '/role',
        //   component: () => import('@/views/role/index.vue')
        // },
        // {
        //   name: '菜单管理',
        //   path: '/menu',
        //   component: () => import('@/views/menu/index.vue')
        // },
        // {
        //   name: '部门管理',
        //   path: '/department',
        //   component: () => import('@/views/department/index.vue')
        // }
      ]
    }
  ]
})
