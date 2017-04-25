import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import login from './modules/user/login'
import register from './modules/user/register'

import sharings from './modules/sharings/sharings'
import sharingsCreates from './modules/sharings/creates'
import sharing from './modules/sharings/sharing'
import sharingComments from './modules/sharings/comments'
import sharingSteps from './modules/sharings/Steps'

Vue.use( Vuex )

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    login,
    register,
  
    sharings,
    sharingsCreates,
    sharing,
    sharingComments,
    sharingSteps
  }
})