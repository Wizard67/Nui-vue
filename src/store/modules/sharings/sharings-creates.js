import $ajax from '@/axios'
import $router from '@/router'

const state = [

]

const getters = {

}

const mutations = {

}

const actions = {
  // 获取表单数据
  _sharingsCreates_addSharing( { dispatch, commit, rootGetters: {_global_valueIntoForm} }, value){

    // 格式化数据
    const params = _global_valueIntoForm(value)

    // 发送 ajax 请求
    $ajax.post( 'post/sharingsCreates', params ).then((res) => {

        dispatch( '_global_handleRes', res ).then((res)=>{
          if (res) {
            $router.push( {name:'steps', params:{steps: res.val }})
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