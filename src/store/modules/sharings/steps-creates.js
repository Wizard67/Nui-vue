import $ajax from '@/axios'
import $router from '@/router'

const state = [

]

const getters = {

}

const actions = {
  // 获取表单数据
  _stepCreates_addStep( { dispatch, commit, rootGetters: {_global_valueIntoForm} }, value){

    // 格式化数据
    const params = _global_valueIntoForm(value)

    // 发送 ajax 请求
    $ajax.post( 'post/stepCreates', params ).then((res) => {

      dispatch( '_global_handleRes', res ).then((res)=>{
        if (res) {
          commit( '_global_changeMessage', { type:'success', content: res.meg} )
          $router.push( {name:'steps', params:{sid: res.val }})
        }
      })

    })
  }
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}