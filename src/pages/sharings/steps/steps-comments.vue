<template>
  <article>
    <comment
      v-for="(item,key) in dataComments"
      :cid="item.cid"
      :user="item.user"
      :content="item.content"
      :datas="item.datas"
      :key="item.cid">
    </comment>
  </article>
</template>

<script>
  import comment from '@/containers/comment'

  export default {
    components: {
      comment
    },
    computed: {
      dataComments() {
        return this.$store.state.sharingComments
      }
    }
  }
</script>