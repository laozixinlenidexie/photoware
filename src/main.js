import Vue from 'vue'
import App from './App.vue'
import router from "@/Router"
import animate from "@/animate"
import store from './store'
import '@/mock/mockServe'

Vue.config.productionTip = false

new Vue({
  store,
  animate,
  router,
  render: h => h(App),
}).$mount('#app')
