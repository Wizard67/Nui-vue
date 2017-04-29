export default {

  install: function (Vue, options) {

    Vue.filter = {
      test() {
        console.log('plugin')
      }
    }
  }

}