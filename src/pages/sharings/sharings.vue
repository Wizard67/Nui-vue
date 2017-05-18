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
    <ul class="flex-full-center">
      <li class="flex-hang">
        <nIcons type="loadMore"></nIcons>
      </li>
    </ul>
  </article>
</template>
<script>
  import panelSharing from '@/containers/panel-sharing'
  import nIcons from '@/components/nIcons'

  var count = 0

  export default {
    data(){
      return {
        busy: false
      }
    },
    components: {
      panelSharing,
      nIcons
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
    mounted(){
      if (this.data) {
        const page = (this.$route.params.sharings)?this.$route.params.sharings:1
        this.$store.dispatch( '_sharings_getSharings', page )
      }
    }
  }
</script>
