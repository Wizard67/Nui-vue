const state = [
  // 评论列表
  {
    // 评论编号
    cid: 1,
    // 用户信息
    user: {
      // 用户编号
      uid: 1,
      // 用户头像
      avatar: require('@/assets/pictures/user4.jpg'),
      // 用户名
      username: '张三',
      // 用户介绍
      introduce: '专业翻墙工。'
    },
    // 评论内容
    content: '这是一条来自高贵 IOS 17 的评论',
    // 评论数据
    datas: {
      date: 200,
      comments: 10
    }
  }
]

const getters = {

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