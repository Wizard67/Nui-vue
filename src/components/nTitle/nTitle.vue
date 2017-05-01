<template>
  <h2 class="title">
    <template v-if="link">
      <router-link :to="{ name:target, params:{[target]: id} }">
        <slot></slot>
      </router-link>
    </template>
    <slot v-else></slot>
  </h2>
</template>

<script>
  export default {
    name: 'nTitle',
    props: {
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