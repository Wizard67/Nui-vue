import $ajax from '@/axios'
import $router from '@/router'

const state = {
  list: [
    // {
    //   tid: 1,
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
  _steps_getSteps( {dispatch, commit}, sid){

    $ajax.get( `get/steps/${sid}` ).then((res) => {

      dispatch( '_global_handleRes', res ).then((res)=>{
        if (res) {
          commit( 'changList', res.val )
        }
      })

    })

  },

  /**
   * 获取步骤基本信息
   * @param  {Function} options.commit
   * @param  {Number} sid
   * @return {Promise}
   */
  _steps_default( {dispatch,commit}, sid){

    return new Promise ((resolve, reject) => {

      $ajax.post( `get/step_default/${sid}` ).then((res) => {
        let datas = res.data
        if ( datas.sta === 200 ) resolve(datas.val)
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
  _steps_join( {dispatch,commit}, sid){

    $ajax.post( `post/sharingsApply/${sid}` ).then((res) => {

      dispatch( '_global_handleRes', res ).then((res)=>{
        if (res) {
          commit( 'changList', res.val )
        }
      })

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
        if ( datas.sta === 200 ) {
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