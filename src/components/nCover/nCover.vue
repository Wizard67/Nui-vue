<template>
  <router-link v-if="link"
              :to="{ name:target, params:{[target]: id} }"
              :src="src"
              class="cover pointer"
              tag="img"/>
  <img v-else
       class="cover pointer"
       :src="src">
</template>

<script>
  export default {
    name: 'nCover',
    props: {
     src: {
      type: String,
      required: true
     },
     link: {
      type: Boolean,
      default: false
     },
     target: {
      type: String,
      dafault: NaN
     },
     id: {
      type: Number,
      dafault: NaN
     }
    }
  }
</script>