<template>
  <div id="app">
    <appAside></appAside>
    <router-view></router-view>
  </div>
</template>

<script>
require('@/assets/css/font-awesome.css')

import appAside from '@/containers/app-aside/app-aside'
export default {
  components: {
    appAside
  }
}
</script>

<style src="@/assets/css/nui-sass/NUI.scss" lang="sass"></style>