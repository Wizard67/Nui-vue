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
  changList( state, value ){
    state.list = value
  }

}

const actions = {

  /**
   * 获取分享步骤列表数据
   * @param  {Function} options.commit
   * @param  {Number} sid
   */
  _steps_getSteps( {commit}, sid){

    $ajax.get( `get/steps/${sid}` )
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
        commit( '_global_changeMessage', { type:'error', content: '请检查网络连接状况'} )
      })
  },

  /**
   * 获取步骤基本信息
   * @param  {Function} options.commit
   * @param  {Number} sid
   * @return {Promise}
   */
  _steps_default( {commit}, sid){

    return new Promise ((resolve, reject) => {

      $ajax.post( `get/step_default/${sid}` ).then((res) => {
        let datas = res.data
        if ( datas.inf ) resolve(datas.val)
      }).catch((err) => {
        commit( '_global_changeMessage', { type:'error', content: '请检查网络连接状况'} )
        reject(err)
      })
    })
  },

  /**
   * 进行参与操作
   * @param  {Function} options.commit
   * @param  {Number} sid
   */
  _steps_join( {commit}, sid){

    $ajax.post( `post/sharingsApply/${sid}` )
      .then((res) => {
        const datas = res.data
        if ( datas.inf ) {
          commit( '_global_changeMessage', { type:'success', content: datas.meg} )
        }else{
          commit( '_global_changeMessage', { type:'error', content: datas.meg} )
        }
      })
      .catch((err) => {
        commit( '_global_changeMessage', { type:'error', content: '请检查网络连接状况'} )
      })
  },

  /**
   * 进行收藏操作
   * @param  {Function} options.commit
   * @param  {Number} sid
   * @return {Promise}
   */
  _steps_favorite( {commit}, sid){

    return new Promise ((resolve, reject) => {

      $ajax.post( `post/favorites/sharings/${sid}` ).then((res) => {
        let datas = res.data
        if ( datas.inf ) {
          commit( '_global_changeMessage', { type:'success', content: datas.meg} )
          resolve(datas.val)
        }else{
          commit( '_global_changeMessage', { type:'error', content: datas.meg} )
        }
      }).catch((err) => {
        commit( '_global_changeMessage', { type:'error', content: '请检查网络连接状况'} )
        reject(err)
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