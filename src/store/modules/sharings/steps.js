import $ajax from '@/axios'
import $router from '@/router'

const state = {
  list: [
    // {
    //   ssid: 1,
    //   users: [ 1, 2, 3, 4 ],
    //   content: 'first we need light',
    //   date: 1000000000,
    //   built: 1000000000,
    //   time: 3
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
  _steps_changList( state, value ){
    state.list = value
  }

}

const actions = {

  /**
   * 获取分享步骤列表数据
   * @param  {Function} options.commit
   * @param  {Number} sid
   */
  _steps_getSteps( {commit, rootGetters: {_global_handleDatas} }, sid){

    // 发送 ajax 请求
    $ajax.get( `get/steps/${sid}` )
      .then((res) => {
        const datas = res.data
        console.log(res)
        // 成功获取到数据
        if ( datas.inf ) {

          // 添加数据到 state
          commit( '_steps_changList', datas.val )
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