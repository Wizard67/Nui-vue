import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'
import axios from './axios'

import nui from './plugins/nui/'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/img-default.svg',
  loading: '/static/img-default.svg',
  attempt: 1,
  filter: {
    webp ({ src }) {
      console.log(src)
      const imgCdn = 'https://image.wizard67.com/'
      if ( src !== '/static/pictures/sharing.jpg') {
        return imgCdn+src
      }else{
        return src
      }
    }
  }
})

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})