<template>
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
</template>

<script>
  import panelNote from '@/containers/panel-note'
  export default {
    components: {
      panelNote
    },
    computed: {
      data() {
        return this.$store.state.sharing
      }
    }
  }
</script>