import $ajax from '@/axios'

export default {

  /**
   * 上传图片到图库
   * @param  {String} str
   * @return {Promise}
   */
  _global_putPicture( { commit, rootGetters: {_global_valueIntoForm} }, value){
      
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