import $ajax from '@/axios'
import $router from '@/router'

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  // 获取表单登录信息
  _register_registerAccount( { commit, rootGetters: {_global_valueIntoForm} }, value){

    // 格式化数据
    const params = _global_valueIntoForm(value)

    // 发送 ajax 请求
    $ajax.post( 'post/register', params )
      .then((res) => {
        let data = res.data
        // 判断是否登录成功
        if ( data.inf ) {

          commit( '_global_changeMessage', { type:'success', content: data.meg} )
          // url 跳转
          $router.push({name:'login'})

        }else{
          commit( '_global_changeMessage', { type:'error', content: data.meg} )
        }
      })
      .catch((err) => {
        commit( '_global_changeMessage', { type:'error', content: '请检查网络连接状况'} )
      })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}