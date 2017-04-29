import $ajax from '@/axios'
import $router from '@/router'

const state = {
  inf:{
    // uid: 1,
    // username: '',
    // avatar: '',
    // email: '',
    // introduce: ''
  },
  active:{

  }
}

const getters = {

}

const mutations = {
  /**
   * 将服务器获取到的数据添加到 state 中
   * @param  {Array} state
   * @param  {Array} value
   */
  _user_changInf( state, value ){
    state.inf = value
  },
  /**
   * 将服务器获取到的数据添加到 state 中
   * @param  {Array} state
   * @param  {Array} value
   */
  _user_changActive( state, value ){
    state.active = value
  }
}

const actions = {
  /**
   * 获取用户信息
   * @param  {Function} options.commit
   * @param  {Number} uid
   */
  _user_getAbout( {commit}, uid){

    // 发送 ajax 请求
    const getUserInf = () => $ajax.get( `get/user_inf/${uid}` )
    const getUserActive = () => $ajax.get( `get/user_active/${uid}`)

    $ajax.all( [getUserInf(), getUserActive()] )
      .then( (res) => {
        const inf = res[0].data
        const active = res[1].data

        if ( inf.inf ) {
          console.log(inf)
          commit( '_user_changInf', inf.val )
        }else{
          console.log('sorry')
        }
        
        if ( active.inf ) {
          console.log(active)
          commit( '_user_changActive', active.val )
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}