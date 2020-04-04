import router from '../router'
import store from '../store'
import { forEachMenuTree } from '@/utils/router-util'
import routerData from './routerData'
import Vue from 'vue'
// 路由拦截器
router.beforeEach(async (to, from, next) => {
  if (!store.state.isRouterInit) {
    //模拟请求
    let req = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ code: 200, list: routerData }) //请求成功
        // reject({ code: 500 }) //请求失败
      }, 500)
    })
    let mappings = { code: 500 }
    let loading = null
    try {
      loading = Vue.prototype.$loading({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0)'
      })
      mappings = await req
      loading.close()
    } catch (e) {
      loading && loading.close()
    }

    if (mappings.code === 500) {
      Vue.prototype.$alert('路由加载失败', '路由异常')
      return
    }

    let { routerList, menuTree, tabNameMappings } = forEachMenuTree(
      mappings.list
    )
    store.commit('setRouterMappings', routerList)
    store.commit('setMenuTree', menuTree)
    store.commit('setTabNameMappings', tabNameMappings)
    store.state.isRouterInit = true

    console.log(
      `%c LTAdmin %c Init Router & Menu & NavTab Success %c`,
      'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#20a0ff ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      'background:transparent'
    )
    next(to)
  } else {
    if (store.state.isReload) {
      store.state.isReload = false
      //还原激活状态
      let menuId = to.meta['menuId'] || ''
      let node = store.state.tabNameMappings[menuId]
      if (node) {
        //菜单部分状态还原
        let tab = {
          menuId: menuId,
          name: node.name,
          path: node.routerPath,
          menuPath: JSON.parse(JSON.stringify(node.menuPath)),
          breadcrumb: node.breadcrumb,
          buttons: node.buttons,
          buttonsMap: node.buttonsMap
        }

        store.commit('setActiveRoute', tab)
        store.commit('setActiveMenu', tab.menuPath)
        //NavTab部分状态还原
        store.commit('pushNav', tab)
      }
    }
    next()
  }
})

router.afterEach((to, from) => {})
