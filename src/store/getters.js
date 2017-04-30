export default {

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