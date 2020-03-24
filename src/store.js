import Vue from 'vue'
import Vuex from 'vuex'
import fa from "element-ui/src/locale/lang/fa";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //tab导航栏数据存储
    navList: [],
    //激活的路由
    activeRoute: null,
    //菜单列表
    routerMappings: [],
    //menu-path
    activeMenu:[]
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
  },
  actions: {},
  getters: {
    navList(state) {
      return state.navList
    },
    routerMappings(state){
      return state.routerMappings
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
    activeMenu(state){
      return JSON.parse(JSON.stringify(state.activeMenu))
    }
  },
  modules: {}
})
