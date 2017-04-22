const state = [
  // 分享记录列表
  {
    // 分享编号
    nid: 1,
    // 创作者
    users: [
      { 
        // 用户编号
        uid: 1,
        // 头像
        avatar: require('@/assets/pictures/user4.jpg')
      },
      { uid: 2, avatar: require('@/assets/pictures/user1.jpg') },
      { uid: 3, avatar: require('@/assets/pictures/user2.jpg') },
      { uid: 4, avatar: require('@/assets/pictures/user3.jpg') },
      { uid: 5, avatar: require('@/assets/pictures/user4.jpg') },
      { uid: 6, avatar: require('@/assets/pictures/user5.jpg') }
    ],
    // 内容简介
    content: 'just a demo',

    // 分享数据
    datas: {
      // 发布时间
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