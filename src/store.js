import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],
    activeRoute: null
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
      console.log(state.activeRoute)
      if (state.activeRoute === null) {
        //查询激活路由所在位置
        return
      }
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
    }
  },
  actions: {},
  getters: {
    navList(state) {
      return state.navList
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
    }
  },
  modules: {}
})
