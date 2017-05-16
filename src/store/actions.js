import $ajax from '@/axios'
import $router from '@/router'

export default {

  _global_test( { commit }, res ){
    console.log(res)
  },
  /**
   * 处理服务器返回的信息
   * @param  {Object} res
   * @return {Object}
   */
  _global_handleRes( { commit }, res ){
    console.log(res.data)
    switch (res.data.sta){
      // ok
      case (200):
        return res.data
      // created
      case (201):
        return
      // accepted
      case (202):
        commit( '_global_changeMessage', { type:'error', content: res.data.meg} )
        return res.data
      // no content
      case (204):
        commit( '_global_changeMessage', { type:'error', content: res.data.meg} )
        return res.data
      // bad request
      case (400):
        return
      // unauthorized
      case (401):
        commit( '_global_changeMessage', { type:'error', content: res.data.meg} )
        return
      // fordidden
      case (403):
        commit( '_global_changeMessage', { type:'error', content: res.data.meg} )
        return
      // no found
      case (404):
        commit( '_global_changeMessage', { type:'error', content: res.data.meg} )
        $router.push('nofind')
        return
      // not acceptable
      case (406):
        commit( '_global_changeMessage', { type:'error', content: res.data.meg} )
        return
      // internal server error
      case (500):
        return
    }
  },

  /**
   * 上传图片到图库
   * @param  {String} str
   * @return {Promise}
   */
  _global_putPicture( { commit, rootGetters: {_global_valueIntoForm} }, value ){
      
    let base64 = value.substring(value.indexOf('base64,')+1)

    const action = 'http://upload-z2.qiniu.com/putb64/-1'
    const getToken = $ajax.get( 'get/getQnToken')

    return new Promise ((resolve, reject) => {

      getToken.then((res) => {
        let data = res.data
        let token = ''
        if ( data.inf ) token = data.val
        
        return $ajax.post(action, base64, {
         headers: {
           'Content-Type': 'application/octet-stream',
           'Authorization': `UpToken ${token}`
         },
         withCredentials: false,
        })
      }).then((res) => {
        resolve(`${res.data.name}.${res.data.type}`)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}