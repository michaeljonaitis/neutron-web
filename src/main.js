import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import SimpleLayout from './layouts/SimpleLayout'

import './assets/css/styles.css'
Vue.config.productionTip = false
Vue.component('simple-layout', SimpleLayout)

const token = localStorage.getItem('user-token')

if (token) {
  axios.defaults.headers.common.Authorization = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
