import $ajax from '@/axios'

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  // 获取表单登录信息
  _login_checkAccount( { commit, rootGetters: {valueIntoForm}}, value){

    // 格式化数据
    const params = valueIntoForm(value)

    // 发送 ajax 请求
    $ajax.post('post/login',
      params
    )
    .then((res) => {
      console.log(res)
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