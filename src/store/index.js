import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import cardUser from './modules/containers/card-user'
import routerApp from './modules/containers/router-app'
import routerPage from './modules/containers/router-page'

import login from './modules/pages/user/login'

import sharings from './modules/pages/sharings/sharings'
import sharing from './modules/pages/sharings/sharing'
import sharingsComments from './modules/pages/sharings/comments'
import sharingsSteps from './modules/pages/sharings/Steps'

Vue.use( Vuex )

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    cardUser,
    routerApp,
    routerPage,

    login,
  
    sharings,
    sharing,
    sharingsComments,
    sharingsSteps
  }
})