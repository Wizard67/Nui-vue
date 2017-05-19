import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import user from './modules/user/user'
import messages from './modules/user/messages'
import favorites from './modules/user/favorites'
import login from './modules/user/login'
import register from './modules/user/register'

import sharings from './modules/sharings/sharings'
import sharingsCreates from './modules/sharings/sharings-creates'

import sharingComments from './modules/sharings/comments'
import Steps from './modules/sharings/steps'
import StepsCreates from './modules/sharings/steps-creates'

import works from './modules/works/works'
import photo from './modules/works/photo'

Vue.use( Vuex )

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
    messages,
    favorites,
    login,
    register,
  
    sharings,
    sharingsCreates,

    sharingComments,
    Steps,
    StepsCreates,

    works,
    photo
  }
})