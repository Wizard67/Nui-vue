<template>
    <span class="icons">
      <i :class="iconClass"></i>
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'nIcon',
    props: {
      type: {
        type: String,
        require: true
      }
    },
    computed: {
      iconClass() {
        return {
          'fa fa-clock-o':  this.type === 'date',
          'fa fa-eye':      this.type === 'views',
          'fa fa-heart':    this.type === 'hearts',
          'fa fa-comments': this.type === 'comments',
          'fa fa-calendar': this.type === 'time',
          'fa fa-list-ul':  this.type === 'items',
        }
      }
    }
  }
</script>