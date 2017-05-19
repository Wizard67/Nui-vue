<template>
  <router-link v-if="link" :to="{ path:`/user/${id}`}" class="users avatar pointer" :src="src" tag="img"/>
  <img v-else class="users avatar pointer" :src="src">
</template>

<script>
  export default {
    name: 'nUsers',
    props: {
     src: {
      required: true
     },
     link: {
      type: Boolean,
      default: false
     },
     id: {
      type: Number
     }
    }
  }
</script>