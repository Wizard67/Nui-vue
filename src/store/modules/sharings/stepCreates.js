import $ajax from '@/axios'
import $router from '@/router'

const state = [

]

const getters = {

}

const actions = {
  // 获取表单数据
  _stepCreates_addStep( { commit, rootGetters: {_global_valueIntoForm} }, value){

    // 格式化数据
    const params = _global_valueIntoForm(value)

    // 发送 ajax 请求
    $ajax.post( 'post/stepCreates', params )
      .then((res) => {
        console.log(res)
        // 判断是否创建成功
        if ( res.data.inf ) {

          // url 跳转至分享步骤页面
          $router.push( {name:'steps', params:{sid: res.data.val }})

        }else{
          console.log('sorry')
        }
      })
      .catch((err) => {
        console.log(err)
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