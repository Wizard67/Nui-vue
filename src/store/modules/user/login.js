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
  _login_checkAccount( { dispatch, commit, rootGetters: {_global_valueIntoForm} }, value){

    // 格式化数据
    const params = _global_valueIntoForm(value)
    // 发送 ajax 请求
    $ajax.post( 'post/login', params ).then((res) => {

      dispatch( '_global_handleRes', res ).then((res)=>{
        if (res) {
          // 处理数据
          localStorage.uid = res.val.uid
          localStorage.rank = res.val.rank
          localStorage.username = res.val.username
          localStorage.avatar = res.val.avatar
          localStorage.token = res.val.token

          commit( '_global_changeAvatar', res.val.avatar )

          $router.push({name:'sharings'})
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