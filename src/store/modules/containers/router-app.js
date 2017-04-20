const state = {

}

const getters = {
  /**
   * 获取路径根节点
   * @param  {Obeject} state
   * @param  {Obeject} routerArray
   * @return {Obeject}
   */
  _routerApp_getIndex: ( state ) => ( routerArray ) => {

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