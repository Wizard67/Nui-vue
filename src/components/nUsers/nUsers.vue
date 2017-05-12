<template>
  <router-link v-if="link" :to="{ name:target, params:{[target]: id} }" class="users avatar pointer" :src="src" tag="img"/>
  <img v-else class="users avatar pointer" :src="src">
</template>

<script>
  export default {
    name: 'nUsers',
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
      default: NaN
     },
     id: {
      type: Number,
      default: NaN
     }
    }
  }
</script>