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
        console.log(res)
        // 判断是否登录成功
        if ( res.data.inf ) {
          // 进行通知
          commit( '_global_changeMessage', { type:'success', content: datas.meg} )
          // url 跳转
          $router.push({name:'login'})

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