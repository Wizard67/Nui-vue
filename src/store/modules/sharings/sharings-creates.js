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
  _sharingsCreates_addSharing( { commit, rootGetters: {_global_valueIntoForm} }, value){
    
    // 上传图片至图库
    console.log(value.cover)

    // 获取上传 token
    $ajax.get( 'get/getQnToken' )
      .then((res) => {
        let data = res.data
        if ( data.inf ) {

          const token = data.val
          alert( token )

        }
      })

    return
    // 格式化数据
    const params = _global_valueIntoForm(value)

    // 发送 ajax 请求
    $ajax.post( 'post/sharingsCreates', params )
      .then((res) => {
        let data = res.data
        // 判断是否创建成功
        if ( data.inf ) {

          // 进行通知
          commit( '_global_changeMessage', { type:'success', content: data.meg} )
          // url 跳转至分享内容页面
          $router.push( {name:'steps', params:{steps: data.val }})

        }else{
          // 进行通知
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