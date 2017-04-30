export default {

  install: function (Vue, options) {

    /**
     * 获取简化数值，以 'k' 的形式返回
     * @param  {Number} num
     * @return {String}
     */
    Vue.filter('formatNum', function ( num ) {

      if (typeof Number(num) !== 'number' || num < 1000) return num

      const rslt = ( num / 1000 ).toString()

      return rslt.slice( 0, rslt.indexOf('.')+2 ) + ' ' + 'k'
    })

    /**
     * 格式化时间戳
     * @param  {Number} num
     * @param  {String} type
     * @return {String}
     */
    Vue.filter('formatDate', function ( num, type ) {

      if (typeof Number(num) !== 'number') return num

      let rslt = ''
      let int = 0
      num *= 1000

      const now = (new Date).getTime()
      const time = (now - num)/1000

      // 时间大于一年或者使用 mormal 模式则输出具体日期
      if ( time > 2592000 || type === 'normal' ) {
        // 转化时间戳: 2017-04-26 00:00:00
        var date = new Date(num);
        const Y = date.getFullYear() + '-'
        const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
        const D = date.getDate() + ' '
        
        rslt = Y + M + D

        if ( type === 'normal') {
          const h = date.getHours() + ':'
          const m = date.getMinutes() + ':'
          const s = date.getSeconds()

          rslt = rslt + h + m + s
        }
      }else{
        // 转化时间戳: n分钟前
        if( time >= 0 && time < 60 ){ 
          rslt = '刚刚'
        }
        else if ( time >= 60 && time < 3600 ){ 
          int = parseInt( time/60 )
          rslt = `${int} 分钟前`
        } 
        else if ( time >= 3600 && time < 86400 ){ 
          int = parseInt( time/3600 )
          rslt = `${int} 小时前` 
        } 
        else{ 
          int = parseInt( time/86400 )
          rslt = `${int} 天前` 
        }
      }

      return rslt
    })


  }

}