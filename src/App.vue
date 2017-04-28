<template>
  <div id="app">
    <appAside></appAside>
    <main>
      <headerMessage></headerMessage>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
require('@/assets/css/font-awesome.css')

import appAside from '@/containers/app-aside'
import headerMessage from '@/containers/header-message'

export default {
  components: {
    appAside,
    headerMessage
  }
}
</script>

<style src="@/assets/css/nui-sass/NUI.scss" lang="sass"></style>