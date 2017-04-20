<template>
  <div class="route-app">
    <ul class="flex-around">
      <li v-for=" (value,key) in index ">
        <router-link :to="{ name: key ,params: {id: 1} }" class="shadow-btn">{{ value.marks[0] }}</router-link>
      </li>
      <li><a href="javascript:void(0);" class="shadow-btn" disabled>作品</a></li>
      <li><a href="javascript:void(0);" class="shadow-btn" disabled>问答</a></li>
      <li><a href="javascript:void(0);" class="shadow-btn" disabled>活动</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'route-app',
    computed: {
      index() {
        return this.$store.getters._routerApp_getIndex( this.$router.options.routes )
      }
    }
  }
</script>