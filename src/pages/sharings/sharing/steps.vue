<template>
  <main>
    <headerPage></headerPage>
    <article>
      <panelNote
        v-for="(item,key) in data"
        :nid="item.ssid"
        :users="item.users"
        :content="item.content"
        :date="item.date"
        :built="item.built"
        :time="item.time"
        :key="item.ssid">
      </panelNote>
    </article>
  </main>
</template>

<script>
  import headerPage from '@/containers/header-page'
  import panelNote from '@/containers/panel-note'

  export default {
    components: {
      headerPage,
      panelNote
    },
    computed: {
      data() {
        return this.$store.state.sharingSteps.list
      }
    },
    mounted(){
      this.$store.dispatch( '_steps_getSteps', 1)
    }
  }
</script>