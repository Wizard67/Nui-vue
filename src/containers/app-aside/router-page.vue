<template>
  <div class="route-page">
    <div class="route-nav">
      <ul class="flex-star-bottom">
        <li v-for=" (value,key) in routers['app'] ">
          <router-link :to="{ name: key }">{{ value.marks[0] }}</router-link>
        </li>
      </ul>
    </div>

    <div class="route-list">
      <ul class="menu">
        <li v-for=" (value,key) in routers['page'] ">
          <router-link :to="{ name: key }">
            {{ value.marks[0] }}<small>{{ value.marks[1] }}</small>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'route-page',
    computed: {
      routers() {
        // console.log(this.$route.path)
        // console.log(this.$route.params)
        return this.$store.getters._routerPage_getRouters( this.$route.path, this.$router.options.routes )
      }
    }
  }
</script>