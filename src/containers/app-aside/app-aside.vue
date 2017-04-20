<template>
  <aside class="shadow-on">
    <card-user></card-user>
    <router-app></router-app>
    <hr>
    <router-page></router-page>
    <br>
  </aside>
</template>

<script>
  import cardUser from './card-user'
  import routerApp from './router-app'
  import routerPage from './router-page'

  export default {
    components: {
      cardUser,
      routerApp,
      routerPage
    }
  }
</script>