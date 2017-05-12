<template>
  <header :class="type" class="shadow-on">
    <nTool :isShow="showMessage" :route="route"></nTool>
    <nMessage :isShow="showMessage">{{ message.content }}</nMessage>
  </header>
</template>

<script>
import raf from 'raf'
import checkActions from './checkActions'
import nTool from './nTool'
import nMessage from './nMessage'

let scrollEvent
let timer

export default {
  data () {
    return {
      route: '',

      currentScrollY: 0,
      lastScrollY: 0,
      elemHeight: 0,
      state: 'pinned',
      showMessage: false
    }
  },
  components: {
    nTool,
    nMessage
  },
  watch: {
    // 监听当前路由变化
    $route() {
      this.route = this.$route.name
    },
    // 监听 message 变化
    message(newVal) {
      clearTimeout(timer)
      this.unfix()
      this.showMessage = true
      window.removeEventListener('scroll', scrollEvent)
      timer = setTimeout( ()=>{
        this.showMessage = false
        window.addEventListener('scroll', scrollEvent)
      },1000)
    }
  },
  mounted () {
    this.route = this.$route.name

    this.initHeader()
  },
  computed: {
    message: {
      get() {
        return this.$store.state.message
      }
    },
    type() {
      return this.state === 'pinned' ||
             this.state === 'unfixed' ||
             this.state === 'none' ? 'show':'hidden'
    }
  },
  methods: {
    test(){
      console.log('hehehe')
    },
    _handleScroll () {
      raf(this.update)
    },
    _getScrollY () {
      let top
      if (window.pageYOffset !== undefined) {
        top = window.pageYOffset
      } else if (window.scrollTop !== undefined) {
        top = window.scrollTop
      } else {
        top = (document.documentElement || document.body.parentNode || document.body).scrollTop
      }
      return top
    },
    initHeader (){
      this.elemHeight = this.$el.offsetHeight
      scrollEvent = this.throttle( this._handleScroll, 50 )
      window.addEventListener('scroll', scrollEvent)
    },
    update () {
      this.currentScrollY = this._getScrollY()
      const action = checkActions(this)
      switch (action) {
        case 'pin':
          this.pin()
          break
        case 'unpin':
          this.unpin()
          break
        case 'unfix':
          this.unfix()
          break
      }
      this.lastScrollY = this.currentScrollY
    },
    pin () {
      this.translate = 0
      setTimeout(() => {
        this.state = 'pinned'
      }, 0)
    },
    unpin () {
      this.translate = '-100%'
      setTimeout(() => {
        this.state = 'unpinned'
      }, 0)
    },
    unfix () {
      this.state = 'unfixed'
    }
  }

}
</script>