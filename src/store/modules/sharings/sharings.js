import $ajax from '@/axios'

const state = {
  list: [
    // {
    //   sid: 1,
    //   cover: '/static/pictures/sharing.jpg',
    //   title: 'title',
    //   summary: 'summary',
    //   users: [ 1,2,3,4,5 ],
    //   date: 100,
    //   views: 100,
    //   hearts: 100,
    //   comments: 22
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
  _sharings_getSharings( {dispatch, commit}, page){

    // 发送 ajax 请求
    $ajax.get( `get/sharings/${page}` ).then((res) => {

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