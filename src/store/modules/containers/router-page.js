const state = {

}

const getters = {
  /**
  * 过滤 appRouters 路径，提取 <router-page> 所需的信息
  */
  _routerPage_getRouters: (state, getters, rootState) => ( route, routerArray ) => {

    const Reg = /^[a-zA-Z]+$/

    let app = {}
    let page = {}
    let children = {}
    let setArray = []

    /**
     * 通过 path 属性获取路径 name
     * @param  {String} path
     * @return {String}
     */
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

const actions = {

}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}