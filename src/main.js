import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './assets/css/styles.css'

Vue.config.productionTip = false

const token = localStorage.getItem('user-token')

if (token) {
  axios.defaults.headers.common.Authorization = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
