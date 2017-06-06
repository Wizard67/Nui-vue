<template>
  <div id="app">
    <appAside :style="asideStyle"></appAside>
    <div v-show="isShow" class="toggle-aside pointer" @click="toggleAside"></div>

    <main>
      <nHeader></nHeader>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// require('@/assets/css/font-awesome.css')
// import css from '@/assets/css/font-awesome.css'

import appAside from '@/containers/app-aside'
import nHeader from '@/components/nHeader'

export default {
  components: {
    appAside,
    nHeader
  },
  computed: {
    isShow(){
      return this.$store.state.showAside
    },
    asideStyle(){
      return this.isShow?'display:flex':''
    }
  },
  methods: {
    toggleAside(){
      this.$store.commit('_global_changeAside',false)
    }
  }
}
</script>

<style src="@/assets/css/nui-sass/NUI.scss" lang="sass"></style>