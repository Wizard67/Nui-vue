export default {
  /**
   * 修改全局提示信息
   * @param  {Object} value
   */
  _global_changeMessage( state, value ){
    state.message = {
      type: value.type,
      content: value.content
    }
  },

  /**
   * 更改用户头像信息
   * @param  {String} value
   */
  _global_changeAvatar( state, value ){

    state.avatar = (value === 'default')?'/static/default.jpg':value
  },

  /**
   * 更改用户发布作品数
   * @param  {Number} value
   */
  _global_changeTopic( state, value ){

    if (typeof value !== 'number') {
      return
    }

    state.topic = value
  },

  /**
   * 更改用户关注者数
   * @param  {Number} value
   */
  _global_changeFollower( state, value ){

    if (typeof value !== 'number') {
      return
    }

    state.follower = value
  },

  /**
   * 更改用户获得赞同数
   * @param  {Number} value
   */
  _global_changeApproval( state, value ){

    if (typeof value !== 'number') {
      return
    }

    state.approval = value
  }


}