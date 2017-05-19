<template>
  <div v-show="isShow" class="message">
    <i class="fa fa-info-circle" :class="messageClass"></i>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        require: true
      },
      type: {
        type: String,
        require: true
      }
    },
    computed:{
      messageClass(){
        return {
          'font-green':  this.type === 'success',
          'font-red':    this.type === 'error'
        }
      }
    }
  }
</script>