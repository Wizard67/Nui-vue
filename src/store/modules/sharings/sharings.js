import $ajax from '@/axios'
import $router from '@/router'

const state = [
  // 分享信息列表
  {
    // 分享编号
    sid: 1,
    // 封面
    cover: require('@/assets/pictures/sharing.jpg'),
    // 标题
    title: '人生有念，岁月极美',
    // 内容简介
    summary: '无数次子夜梦回，思念跌落在一千里烟波。多少尘缘如梦落飞花，多少离殇已千古凄凉。往事难忘，谁的相思渲染了忧伤的情怀。',
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
    // 分享数据
    datas: {
      // 发布时间
      date: 100,
      // 点击数
      views: 100,
      // 收藏数
      hearts: 100,
      // 评论数
      comments: 22
    }
  }
]

const getters = {

}

const actions = {
  // 获取分享列表信息
  _sharings_getSharings( {commit}, page){

    // 发送 ajax 请求
    $ajax.post( 'get/sharings/', page )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}