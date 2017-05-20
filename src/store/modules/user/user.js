import $ajax from '@/axios'

const state = {
  inf:{
    // uid: 1,
    // username: '',
    // avatar: '',
    // email: '',
    // introduce: ''
  },
  active:{
    // uid: 1,
    // aid: 1,
    // type: '',
    // url: '',
    // param: 1,
    // built: 1000000000,
    // extra: {
    //   if (type = 'steps || sharings') => title:''
    // }
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
  _user_getAbout( {dispatch, commit}, uid){

    const getUserInf = () => $ajax.get( `get/user_inf/${uid}` )
    const getUserActive = () => $ajax.get( `get/user_active/${uid}`)

    $ajax.all( [getUserInf(), getUserActive()] ).then((res)=>{

      const inf = res[0].data
      const active = res[1].data

      dispatch( '_global_handleRes', res[0] ).then((res)=>{
        if (res) {
          commit( '_user_changInf', res.val )
        }
      })

      dispatch( '_global_handleRes', res[1] ).then((res)=>{
        if (res) {
          commit( '_user_changActive', res.val )
        }
      })
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}