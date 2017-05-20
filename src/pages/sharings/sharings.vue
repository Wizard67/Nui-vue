<template>
  <article v-infinite-scroll="loadMore" :infinite-scroll-disabled="busy">
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
    <nLoadmore v-show="busy"></nLoadmore>
  </article>
</template>
<script>
  import panelSharing from '@/containers/panel-sharing'
  import nLoadmore from '@/components/nLoadmore'

  var count = 0

  export default {
    data(){
      return {
        busy: false
      }
    },
    components: {
      panelSharing,
      nLoadmore
    },
    computed: {
      data() {
        return this.$store.state.sharings.list
      }
    },
    methods: {
      loadMore() {
        this.busy = true;

        setTimeout(() => {
          console.log('ok')
          this.busy = false;
        }, 1000);
      }
    },
    created(){

      const page = (this.$route.params.sharings)?this.$route.params.sharings:1
      this.$store.dispatch( '_sharings_getSharings', page )

    }
  }
</script>
