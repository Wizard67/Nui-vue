export default {
  /**
   * 获取简化数值，以 'k' 的形式返回
   * @param {Number}  value
   */
  _global_valueBirefly: (state) => (value) => {

    if (typeof value !== 'number' || value < 1000) {
      return value
    }

    const newValue = ( value / 1000 ).toString()

    return newValue.slice( 0, newValue.indexOf('.')+2 ) + ' ' + 'k'      
  },

  /**
   * 将对象转换为表单数组
   * @param  {Object} value
   * @return {String}
   */
  _global_valueIntoForm: (state) => (value) => {

    if (typeof value !== 'object') {
      return value
    }

    // 调用 querystring
    const { stringify } = require('querystring');

    return  stringify( value )
  }
}