export default {
  /**
   * 获取简化数值，以 'k' 的形式返回
   * @param {Number}  num
   * @return {String}
   */
  _global_valueBirefly: (state) => (num) => {

    if (typeof num !== 'number' || num < 1000) {
      return num
    }

    const newValue = ( num / 1000 ).toString()

    return newValue.slice( 0, newValue.indexOf('.')+2 ) + ' ' + 'k'      
  },

  /**
   * 格式化时间戳
   * @param  {Number} num
   * @param  {String} type
   * @return {String}
   */
  _global_dateChange: (state) => ( num, type ) => {

    if (typeof num !== 'number') return

    let changedDate = ''
    let nTime = 0
    num *= 1000

    const now = (new Date).getTime()
    const time = (now - num)/1000

    // 如果时间大于一年则输出具体日期
    if ( time > 2592000 || type === 'only' ) {
      // 转化时间戳: 2017-04-26 00:00:00
      var date = new Date(num);
      const Y = date.getFullYear() + '-'
      const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
      const D = date.getDate() + ' '
      
      changedDate = Y + M + D

      if ( type === 'only') {
        const h = date.getHours() + ':'
        const m = date.getMinutes() + ':'
        const s = date.getSeconds()

        changedDate = changedDate + h + m + s
      }
    }else{
      // 转化时间戳: 12 分钟前
      if( time >= 0 && time < 60 ){ 
        changedDate = '刚刚'
      }
      else if ( time >= 60 && time < 3600 ){ 
        nTime = parseInt( time/60 )
        changedDate = `${nTime} 分钟前`
      } 
      else if ( time >= 3600 && time < 86400 ){ 
        nTime = parseInt( time/3600 )
        changedDate = `${nTime} 小时前` 
      } 
      else{ 
        nTime = parseInt( time/86400 )
        changedDate = `${nTime} 天前` 
      }
    }

    return changedDate
  },

  /**
   * 将对象转换为表单数组
   * @param  {Object} obj
   * @return {String}
   */
  _global_valueIntoForm: (state) => (obj) => {

    if (typeof obj !== 'object') {
      return obj
    }

    // 调用 querystring
    const { stringify } = require('querystring');

    return  stringify( obj )
  },

  /**
   * 对服务器数据进行格式化
   * @param  {Object} obj
   * @return {Object}
   */
  _global_handleDatas: (state) => (obj) => {

    if (typeof obj !== 'object') return obj

    // 将用户字符串转换为数组
    if ( obj.hasOwnProperty('users'))obj.users = obj.users.split('|')

    const list = ['built',
                  'comments',
                  'date',
                  'hearts',
                  'sid',
                  'ssid',
                  'time',
                  'users',
                  'views']

    // 将字符串转换为数值
    const toNumber = ( obj ) => {

      for ( let key in list) {
        
        if ( obj.hasOwnProperty(list[key]) ) {
          let value = obj[list[key]]

          // 判断是否为数组
          if (Array.isArray(value)) {
            value.forEach( (item, index, value ) => {
              obj[list[key]][index] = Number(item)
            })
          }
          // 判断是否为字符串
          if (typeof value === 'string') {
            (obj[list[key]] = Number(value))
          }
        }
      }

      return obj
    }

    obj = toNumber( obj )
    return obj
  },

  /**
   * 获取路径根节点
   * @param  {Obeject} state
   * 
   * @param  {Obeject} routerArray  路径列表
   * @return {Obeject}
   */
  _global_getIndex: ( state ) => ( routerArray ) => {

    let arr = {}

    for ( let item in routerArray ) {
      let node = routerArray[item]
      // 定位到非默认页面
      if ( node.hasOwnProperty('meta')) {
        // 是否固定到组件
        if ( node.meta.pin ){
          // 处理路径信息
          let name = node.path.split('/')[1]

          arr[name] = {
            marks: node.meta.marks
          }          
        }
      }
    }
    // console.log(arr)
    return arr
  },

  /**
   * 过滤 appRouters 路径，提取 <router-page> 所需的信息
   * @param  {Object} state        [description]
   * @param  {Object} getters      [description]
   * @param  {Object} rootState    [description]
   * 
   * @param  {Object} route        [description]  当前路由地址
   * @param  {Object} routerArray  [description]  路径列表
   * @return {Object}
   */
  _global_getRouters: (state, getters, rootState) => ( route, routerArray ) => {

    const Reg = /^[a-zA-Z]+$/

    let app = {}
    let page = {}
    let children = {}
    let setArray = []

    // 通过 path 属性获取路径 name
    // @param  {String} path
    // @return {String}
    const _getName = ( path ) => {
      if ( path.indexOf('/') === 0) {
        return path.split('/')[1]
      }else{
        return path.split('/')[0]
      }
    }

    // 对路由进行切割
    let routeSplit = route.split('/')
    for( let key in routeSplit ){
      if ( Reg.test(routeSplit[key]) ) {
        setArray.push( routeSplit[key] )
      }
    }

    let loopArray = routerArray

    // 遍历路由地址
    for ( let i = 0; i < setArray.length; i++) {

      // 遍历路径集合
      for ( let item in loopArray ) {

        // 定位到非默认页面节点
        if ( loopArray[item].hasOwnProperty('meta') ) {
          let name = ''

          // 对路径进行处理
          name = _getName( loopArray[item].path )

          // 匹配路径集合
          if ( name === setArray[i] ) {

            // 将路径信息保存
            app[name] = {
              marks: loopArray[item].meta.marks
            }

            // 当遍历到数据最后一个对象时，返回该对象的子路径集合
            // 否则迭代子对象继续遍历
            if ( i === (setArray.length-1) ) {

              if ( loopArray[item].hasOwnProperty('children') ) {
                children = loopArray[item].children
              }else{
                children = []
              }

            }else{
              loopArray = loopArray[item].children

              break
            }
          }
        }
      }
    }

    // 格式化结果
    for( let item in children ) {
      if ( children[item].hasOwnProperty('meta') ) {
        if ( children[item].meta.pin ) {
          if ( children[item].name === undefined ) {
            name = _getName( children[item].path )
          }else{
            name = children[item].name
          }
          page[name] = {
            marks: children[item].meta.marks
          }
        }
      }
    }

    // console.log(app)
    // console.log(page)

    return { app, page }
  }
}