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
  _user_changFavorites( state, value ){
    state.list = value
  },
}

const actions = {
  /**
   * 获取用户收藏信息
   * @param  {Function} options.commit
   */
  _user_getFavorites( {commit} ){

    // 发送 ajax 请求
    $ajax.get( `/get/favorites/` )
      .then((res) => {
        const datas = res.data

        // 成功获取到数据
        if ( datas.inf ) {

          // 添加数据到 state
          commit( '_user_changFavorites', datas.val )
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
  mutations,
  actions
}