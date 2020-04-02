import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HttpApi from '@/apis/http.api'
import '@/configs/router.config'
import ElementUI from 'element-ui'
import './components'
import 'element-ui/lib/theme-chalk/index.css'
import ThemeLoader from '@/plugins/theme-loader.plugin'
import cookies from 'jscookie'
import EventBus from '@/utils/event-bus'
Vue.prototype.$cookies = cookies
Vue.use(ElementUI)
Vue.use(HttpApi)
Vue.use(ThemeLoader)
Vue.use(EventBus)

//加载用户设置参数
ThemeLoader.loadUserSettings()

// 开启vconsole
// if (process.env.NODE_ENV !== 'production') {
//   let Vconsole =  require('vconsole')
//   let vc = new Vconsole()
//   Vue.use(vc)
// }

// 开启水印
// import WM from '@/plugins/watermark.plugin'
// WM.set('squirrelzoo.com', 'LTAdmin Develop')

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
