import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HttpApi from '@/apis/http.api'
import '@/configs/router.config'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.use(HttpApi)

// 开启vconsole
// if (process.env.NODE_ENV !== 'production') {
//   let Vconsole =  require('vconsole')
//   let vc = new Vconsole()
//   Vue.use(vc)
// }

// 开启水印
// import WM from '@/plugins/watermark.plugin'
// WM.set('squirrelzoo.com','松鼠乐园开发版')

//菜单测试数据
let mappings = [
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
            view: '/role',
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
        view: '/role',
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
  },
  {
    name: 'aaaaaa',
    path: '/department1',
    view: '/department',
    isRouter: false,
    isKeepalive: false,
    children: []
  }
]

import { forEachMenuTree } from './utils/router-util'

let { routerList, menuTree, tabNameMappings } = forEachMenuTree(mappings)
store.commit('setRouterMappings', routerList)
store.commit('setMenuTree', menuTree)
store.commit('setTabNameMappings', tabNameMappings)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
