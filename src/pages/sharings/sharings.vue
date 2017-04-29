<template>
  <article>
    <panelSharing
      v-for="(item,key) in data"
      :sid="item.sid"
      :cover="item.cover"
      :title="item.title"
      :summary="item.summary"
      :users="item.users"
      :date="item.date"
      :views="item.views"
      :hearts="item.hearts"
      :comments="item.comments"
      :items="item.items"
      :key="item.sid">
    </panelSharing>
  </article>
</template>
<script>
  import panelSharing from '@/containers/panel-sharing'

  export default {
    components: {
      panelSharing
    },
    computed: {
      data() {
        return this.$store.state.sharings.list
      }
    },
    mounted(){
      this.$store.dispatch( '_sharings_getSharings', 1 )
    }
  }
</script>
