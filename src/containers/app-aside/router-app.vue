<template>
  <div class="route-app">
    <ul class="flex-around">
      <li v-for=" (value,key) in index ">
        <router-link :to="{ name: key ,params: {id: 1} }" class="icon">{{ value.marks[0] }}</router-link>
      </li>
      <li><a href="javascript:void(0);" class="icon" disabled>工具</a></li>
      <li><a href="javascript:void(0);" class="icon" disabled>问答</a></li>
      <li><a href="javascript:void(0);" class="icon" disabled>活动</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'route-app',
    computed: {
      index() {
        return this.$store.getters._global_getIndex( this.$router.options.routes )
      }
    }
  }
</script>