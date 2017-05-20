import $ajax from '@/axios'

const state = {
  list: [
    // {
    //   sid: 1,
    //   cover: '/static/pictures/sharing.jpg',
    //   uid: 1,
    //   avatar: 'avatar.jpg'
    //   built: 1000000000,
    //   hearts: 100
    // }
  ]
}

const getters = {

}

const mutations = {

  /**
   * 将服务器获取到的数据添加到 state 中
   * @param  {Array} state
   * @param  {Array} value
   */
  _works_changList( state, value ){
    state.list = value
  }
}

const actions = {

  /**
   * 获取分享列表数据
   * @param  {Function} options.commit
   * @param  {Number} page
   */
  _works_getWorks( {dispatch, commit, state}, page){

    if (state.list.length === 0 ) {
      // 发送 ajax 请求
      $ajax.get( `get/works/${page}` ).then((res) => {

        dispatch( '_global_handleRes', res ).then((res)=>{
          if (res) {
            commit( '_works_changList', res.val )
          }
        })

      })
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}