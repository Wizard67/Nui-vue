const state = {
  // 用户头像url
  avatar: require('@/assets/pictures/user.jpg'),
  // 用户发布作品数
  topic: 100,
  // 用户关注者数
  follower: 23,
  // 用户获得赞同
  approval: 6532
}

const getters = {
  _cardUser_getValue: (state, getters) => (value) =>{
    return getters.valueBirefly(state[value])
  }
}

const mutations = {

}

const actions = {

}



export default {
  state,
  getters,
  mutations,
  actions
}