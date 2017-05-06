export default {

  /**
   * throttle 节流函数
   * @param  {Function} func
   * @param  {Number} wait
   * @param  {Object} options
   * @return {Function}
   * 
   * https://github.com/jashkenas/underscore/blob/e944e0275abb3e1f366417ba8facb5754a7ad273/underscore.js
   * 
   */
  _throttle: function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : new Date;
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = new Date;
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  },

  /**
   * debounce 去抖函数
   * @param  {Function} func
   * @param  {Number} wait
   * @param  {Object} immediate
   * @return {Function}
   * 
   */
  _debounce: function(func, wait, immediate) {
    var timeout, args, context, timestamp, result
    var later = function() {
      var last = new Date - timestamp
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last)
      } else {
        timeout = null
        if (!immediate) {
          result = func.apply(context, args)
          if (!timeout) context = args = null
        }
      }
    }
    return function() {
      context = this
      args = arguments
      timestamp = new Date
      var callNow = immediate && !timeout
      if (!timeout) timeout = setTimeout(later, wait)
      if (callNow) {
        result = func.apply(context, args)
        context = args = null
      }
      return result
    }
  },



  install: function (Vue, options) {

    Vue.directive('throttle',{
      bind: (el, binding, vnode, oldVnode) => {
        el.addEventListener('click', this._throttle(binding.value,2000))
      }
    })

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

      // 时间大于一年或者使用 normal 模式则输出具体日期
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

   /**
    * debounce 函数
    * @param  {Function} func
    * @param  {Number} wait
    * @return
    */
    Vue.prototype.debounce = (func, wait) => {
      return this._debounce(func, wait)
    }

    /**
     * throttle 函数
     * @param  {Function} func
     * @param  {Number} wait
     * @return
     */
    Vue.prototype.throttle = (func, wait) => {
      return this._throttle(func, wait)
    }

  }

}