export default {
  /**
   * 全局提示信息
   * @type {[type]}
   */
  message: {
    type:'',
    content: ''
  },

  /**
   * 强制显示侧边栏
   */
  showAside: false,

  /**
   * 用户头像信息
   * @type {String}
   */
  // avatar: localStorage.avatar || process.env.NODE_ENV === 'production'?'/demo/nui-vue/static/default.jpg':'/static/default.jpg',
  avatar: localStorage.avatar,
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