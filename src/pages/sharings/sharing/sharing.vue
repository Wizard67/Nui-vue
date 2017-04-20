<template>
  <main>
    <headerPage></headerPage>
    <article>
      <panelNote
        v-for="(item,key) in data"
        :nid="item.nid"
        :users="item.users" 
        :content="item.content" 
        :datas="item.datas" 
        :key="item.nid">
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
        return this.$store.state.sharing
      }
    }
  }
</script>