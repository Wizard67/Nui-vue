const state = [
  // 步骤记录列表
  {
    // 步骤编号
    sid: 1,
    // 创作者
    users: [
      { 
        // 用户编号
        uid: 1,
        // 头像
        avatar: require('@/assets/pictures/user4.jpg')
      },
      { uid: 2, avatar: require('@/assets/pictures/user1.jpg') }
    ],
    // 内容
    content: 'first we need light',

    // 分享数据
    datas: {
      // 发布时间
      date: 100
    }
  },
  {
    sid: 2,
    users: [
      { uid: 1, avatar: require('@/assets/pictures/user4.jpg') },
      { uid: 2, avatar: require('@/assets/pictures/user1.jpg') },
      { uid: 3, avatar: require('@/assets/pictures/user3.jpg') },
    ],
    content: 'second we need light',
    datas: {
      date: 100
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