import $ajax from '@/axios'
import $router from '@/router'

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
  _sharings_getSharings( {commit}, page){

    // 发送 ajax 请求
    $ajax.get( `get/sharings/${page}` )
      .then((res) => {
        const datas = res.data

        // 成功获取到数据
        if ( datas.inf ) {

          // 添加数据到 state
          commit( 'changList', datas.val )
        }else{
          // 进行通知
          commit( '_global_changeMessage', { type:'error', content: datas.meg} )
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