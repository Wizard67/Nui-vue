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
  _login_checkAccount( { commit, rootGetters: {_global_valueIntoForm} }, value){

    // 格式化数据
    const params = _global_valueIntoForm(value)

    // 发送 ajax 请求
    $ajax.post( 'post/login', params )
      .then((res) => {
        console.log(res)
        // 判断是否登录成功
        if ( res.data.inf ) {

          // 处理数据
          let data = res.data.val

          localStorage.uid = data.uid
          localStorage.rank = data.rank
          localStorage.username = data.username
          localStorage.avatar = data.avatar

          commit( '_global_changeAvatar', data.avatar )

          // url 跳转
          // $router.push({name:'home'})

        }else{
          console.log('sorry')
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