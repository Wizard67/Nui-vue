<template>
  <router-link v-if="link"
              :to="{ name:target, params:{[target]: id} }"
              v-lazy="src"
              class="cover pointer"
              tag="img"/>
  <img v-else
       class="cover pointer"
       :style="style"
       v-lazy="src">
</template>

<script>
  export default {
    name: 'nCover',
    props: {
     src: {
      required: true
     },
     link: {
      type: Boolean,
      default: false
     },
     target: {
      dafault: NaN
     },
     id: {
      type: Number,
      dafault: NaN
     }
    }
  }
</script>