<template>
  <div v-show="isShow" class="message">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        require: true
      }
    },
  }
</script>