import $ajax from '@/axios'

const state = {
  list:{
    // mid: 1,
    // fuid: 1,
    // username: '',
    // param: 1,
    // title: '',
    // content: '',
    // type: '',
    // built: 100000000,
    // isread: 0
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
  _user_changMessages( state, value ){
    state.list = value
  }
}

const actions = {
  /**
   * 获取用户通知消息
   * @param  {Function} options.commit
   */
  _user_getMessages( {dispatch, commit} ){

    // 发送 ajax 请求
    $ajax.get( `get/messages/` ).then((res) => {

      dispatch( '_global_handleRes', res ).then((res)=>{
        if (res) {
          commit( '_user_changMessages', res.val )
        }
      })

    })
  },

  /**
   * 处理用户参与分享的请求
   * @param  {Number} $result
   */
  _user_sharingsResult( {dispatch, commit}, params ){
    // 发送 ajax 请求
    $ajax.get( `post/sharingsResult/${params.mid}/${params.result}` ).then((res) => {

      dispatch( '_global_handleRes', res ).then((res)=>{

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