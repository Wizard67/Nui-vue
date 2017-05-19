import $ajax from '@/axios'

const state = {
  list: {
    //   sid: 1,
    //   cover: '/static/pictures/sharing.jpg',
    //   uid: 1,
    //   avatar: 'avatar.jpg'
    //   built: 1000000000,
    //   hearts: 100
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
  changList( state, value ){
    state.list = value
  }
}

const actions = {

  /**
   * 获取分享列表数据
   * @param  {Function} options.commit
   * @param  {Number} page
   */
  _sharings_getPhoto( {dispatch, commit}, page){

    // 发送 ajax 请求
    $ajax.get( `get/photo/${page}` ).then((res) => {

      dispatch( '_global_handleRes', res ).then((res)=>{
        if (res) {
          console.log(res.val)
          commit( 'changList', res.val )
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