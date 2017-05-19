<template>
  <article>
    <panelWorks
      v-for="(item,key) in data"
      :wid="item.wid"
      :cover="item.cover"
      :uid="item.uid"
      :avatar="item.avatar"
      :hearts="item.hearts"
      :built="item.built"
      :key="item.wid">
    </panelWorks>
    <nLoadmore v-show="busy"></nLoadmore>
  </article>

</template>

<script>
  import panelWorks from '@/containers/panel-works'
  import nLoadmore from '@/components/nLoadmore'

  var count = 0

  export default {
    data(){
      return {
        busy: false
      }
    },
    components: {
      panelWorks,
      nLoadmore
    },
    computed: {
      data() {
        return this.$store.state.works.list
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
      const page = (this.$route.params.works)?this.$route.params.works:1
      this.$store.dispatch( '_sharings_getWorks', page )
    }
  }
</script>