<template>
  <main>
    <headerPage></headerPage>
    <article>
      <comment
        v-for="(item,key) in data"
        :cid="item.cid"
        :user="item.user"
        :content="item.content"
        :datas="item.datas"
        :key="item.cid"
      >
      </comment>
    </article>    
  </main>

</template>

<script>
  import headerPage from '@/containers/header-page'
  import comment from '@/containers/comment'

  export default {
    components: {
      headerPage,
      comment
    },
    computed: {
      data() {
        return this.$store.state.sharingsComments
      }
    }
  }
</script>