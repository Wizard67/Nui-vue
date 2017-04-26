const state = {
  list: [
    {
      // 步骤编号
      ssid: 1,
      // 创作者
      users: [ 1, 2, 3, 4 ],
      // 内容
      content: 'first we need light',
      // 分享数据
      date: 1000000000,
      built: 1000000000,
      time: 3
    },
    {
      // 步骤编号
      ssid: 2,
      // 创作者
      users: [ 1, 2, 3, 5 ],
      // 内容
      content: 'hello world',
      // 分享数据
      date: 1000000000,
      built: 1000000000,
      time: 1
    }
  ]
}

const getters = {

}

const mutations = {
  /**
   * 将服务器获取到的数据添加到 state 中
   * @param  {Array} state
   * @param  {Array} value
   */
  _steps_changList( state, value ){
    state.list = value
  }

}

const actions = {

}



export default {
  state,
  getters,
  actions,
  mutations
}