export default {
  /**
   * 用户头像信息
   * @type {String}
   */
  avatar: localStorage.avatar || '/static/nologin.jpg',

  /**
   * 用户发布作品数
   * @type {Number}
   */
  topic: localStorage.topic || 0,


  /**
   * 用户关注者数
   * @type {Number}
   */
  follower: localStorage.follower || 0,

  /**
   * 用户获得赞同数
   * @type {Number}
   */
  approval: localStorage.approval || 0
}