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
  _sharings_changList( state, value ){
    state.list = value
  }

}

const actions = {

  /**
   * 获取分享列表数据
   * @param  {Function} options.commit
   * @param  {Number} page
   */
  _sharings_getSharings( {commit, rootGetters: {_global_handleDatas} }, page){

    // 发送 ajax 请求
    $ajax.post( 'get/sharings/', page )
      .then((res) => {
        const datas = res.data

        // 成功获取到数据
        if ( datas.inf ) {
          let data = []
          for (let item in datas.val) {
            // 对数据进行格式化
            data.push( _global_handleDatas(datas.val[item]) )
          }
          // 添加数据到 state
          commit( '_sharings_changList', data )
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