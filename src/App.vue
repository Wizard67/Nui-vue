<template>
  <div id="app">
    <appAside></appAside>
    <main>
      <nHeader></nHeader>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
require('@/assets/css/font-awesome.css')

import appAside from '@/containers/app-aside'
import nHeader from '@/components/nHeader'

export default {
  components: {
    appAside,
    nHeader
  }
}
</script>

<style src="@/assets/css/nui-sass/NUI.scss" lang="sass"></style>