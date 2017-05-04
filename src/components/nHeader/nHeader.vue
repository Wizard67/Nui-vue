<template>
  <header :class="type" class="shadow-on">
      <p>你好</p>
      <button class="shadow-btn" v-throttle="key" >click</button>
  </header>
</template>

<script>
import raf from 'raf'
import checkActions from './checkActions'

export default {
  data () {
    return {
      currentScrollY: 0,
      lastScrollY: 0,
      elemHeight: 0,
      state: 'pinned',
      translate: 0
    }
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    upTolerance: {
      type: Number,
      default: 5
    },

    downTolerance: {
      type: Number,
      default: 0
    },

    onPin: Function,
    onUnpin: Function,

    pinStart: {
      type: Number,
      default: 0
    }
  },

  watch: {
    disabled (newVal) {
      if (newVal) {
        this.unfix()
        window.removeEventListener('scroll', this._handleScroll)
      }
    }
  },

  mounted () {
    // 获取组件高度
    this.elemHeight = this.$el.offsetHeight
    // 是否禁用
    if (!this.disabled) {
      // 页面监听滚动，触发 _handleScroll 方法
      window.addEventListener('scroll', this.debounce(this._handleScroll,50))
    }
  },

  computed: {
    type() {
      return this.state === 'pinned' ||
             this.state === 'unfixed' ||
             this.state === 'none' ? 'show':'hidden'
    },

    // 通过状态判断是否位于顶部
    isInTop () {
      return this.state === 'pinned' || this.state === 'unpinned'
    }
  },

  methods: {
    key() {
      console.log('click')
    },

    // 触发 _handleScroll 方法
    _handleScroll () {
      // 进行动画绘制
      raf(this.update)
      console.log('nihao')
    },

    // 获取滚动条高度
    _getScrollY () {
      let top
      // 如果页面发生偏移获取偏移值
      if (window.pageYOffset !== undefined) {
        top = window.pageYOffset
      } else if (window.scrollTop !== undefined) {
        top = window.scrollTop
      } else {
        top = (document.documentElement || document.body.parentNode || document.body).scrollTop
      }
      return top
    },

    // 更新数据
    update () {
      // 获取当前偏移高度
      this.currentScrollY = this._getScrollY()

      // 检查活动类型 [ unfix, none, unpin, pin ]
      const action = checkActions(this)

      // 判断 action 类型，并触发相应方法
      if (action === 'pin') {
        this.pin()
      } else if (action === 'unpin') {
        this.unpin()
      } else if (action === 'unfix') {
        this.unfix()
      }

      // 保存当前偏移值
      this.lastScrollY = this.currentScrollY
    },

    pin () {
      // 触发 onPin 钩子
      if (this.onPin) {
        this.onPin()
      }
      // 显示 head
      this.translate = 0
      // 设置当前状态为 pined
      setTimeout(() => {
        this.state = 'pinned'
      }, 0)
    },

    unpin () {
      // 触发 onUppin 钩子
      if (this.onUnpin) {
        this.onUnpin()
      }
      // 隐藏 head
      this.translate = '-100%'
      // 设置当前状态为 unpinned
      setTimeout(() => {
        this.state = 'unpinned'
      }, 0)
    },

    unfix () {
      // 设置当前状态为 unfixed
      this.state = 'unfixed'
    }
  }

}
</script>