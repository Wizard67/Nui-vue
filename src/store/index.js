import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import login from './modules/user/login'

import sharings from './modules/sharings/sharings'
import sharing from './modules/sharings/sharing'
import sharingsComments from './modules/sharings/comments'
import sharingsSteps from './modules/sharings/Steps'

Vue.use( Vuex )

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    login,
  
    sharings,
    sharing,
    sharingsComments,
    sharingsSteps
  }
})