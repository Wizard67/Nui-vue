export default{
  install(Vue) {
    // Vue.prototype.$alert = 'alert'
    Vue.prototype.check = (value) => {
      if (/^[\w]{6,8}$/.test(value)) {
        return true
      }else{
        return false
      }
    }
  }
}