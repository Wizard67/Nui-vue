import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'
import axios from './axios'

import nui from './plugins/nui/'
// import validate from './plugins/vee-validate'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})