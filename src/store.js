import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRouterInit: false,
    //tab导航栏数据存储
    navList: [],
    //激活的路由
    activeRoute: null,
    //动态路由
    routerMappings: [],
    //tab导航名称和路径的关联
    tabNameMappings: {},
    //菜单列表
    menuTree: [],
    //menu-path
    activeMenu: [],
    //菜单折叠状态
    isCollapse: false
  },
  mutations: {
    pushNav(state, payload) {
      state.navList.push(payload)
    },
    removeNav(state, payload) {
      state.navList.splice(payload, 1)
    },
    /**
     * type: left,right,other,all
     * @param state
     * @param type
     */
    removeNavAdvance(state, type) {
      if (state.activeRoute === null) {
        return
      }
      //查询激活路由所在位置
      let startIndex = state.navList.findIndex(e => {
        return e.name === state.activeRoute.name
      })

      switch (type) {
        case 'left':
          state.navList.splice(0, startIndex)
          break
        case 'right':
          state.navList.splice(
            startIndex + 1,
            state.navList.length - startIndex
          )
          break
        case 'other':
          state.navList = [state.activeRoute]
          break
        case 'all':
          state.navList = []
          break
      }
    },
    setActiveRoute(state, payload) {
      state.activeRoute = payload
    },
    setActiveMenu(state, payload) {
      state.activeMenu = payload
    },
    setRouterMappings(state, payload) {
      state.routerMappings = payload
      //添加路由
      const registedRouters = router.options.routes //FIXME首页必须放在数组第一个
      payload.forEach(e => {
        const route = {
          path: e.routerPath,
          name: e.name,
          component: () => import(`@/views${e.view}`),
          meta: {
            isKeepalive: e.isKeepalive
          }
        }
        const homeRoute = registedRouters.filter(e => {
          return e.home
        })

        if (homeRoute.length === 0) {
          throw Error(
            "Not Found Home Router in routes, please set one's home to true"
          )
        }

        homeRoute[0].children.push(route)
        // console.log(route)
      })
      router.addRoutes(registedRouters)
    },
    setMenuTree(state, payload) {
      state.menuTree = payload
    },
    setTabNameMappings(state, payload) {
      state.tabNameMappings = payload
    },
    toggleIsCollapse(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {},
  getters: {
    navList(state) {
      return state.navList
    },
    routerMappings(state) {
      return state.routerMappings
    },
    tabNameMappings(state) {
      return state.tabNameMappings
    },
    menuTree(state) {
      return state.menuTree
    },
    isOpenedRoute(state) {
      return payload => {
        return (
          state.navList.filter(e => {
            return e.path === payload.path
          }).length > 0
        )
      }
    },
    activeRoute(state) {
      return state.activeRoute
    },
    activeMenu(state) {
      return JSON.parse(JSON.stringify(state.activeMenu))
    },
    isCollapse(state) {
      return state.isCollapse
    }
  },
  modules: {}
})
