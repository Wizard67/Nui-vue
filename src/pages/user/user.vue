<template>
  <article>
    <div class="panel-note shadow-on">
      <h2 class="title">用户信息</h2>
      <ul>
        <li class="flex-padding-column">
          <img class="avatar" :src="dataInf.avatar">
          <p>username: {{ dataInf.username }}</p>
          <p>uid: #{{ dataInf.uid }}</p>
          <p>email: {{ dataInf.email }}</p>
          <p>introduce: {{ dataInf.introduce }}</p>
        </li>
      </ul>
    </div>
    <div class="panel-note shadow-on">
      <ul class="flex-padding-column">
        <li v-for="item in dataActive">
          {{item.built|formatDate('normal')}} {{item.username}} {{item.content}}
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
  export default {
    computed: {
      dataInf() {
        return this.$store.state.user.inf
      },
      dataActive() {
        return this.$store.state.user.active
      }
    },
    mounted(){
      const uid = (this.$route.params.uid)?this.$route.params.uid:0
      this.$store.dispatch( '_user_getAbout', uid )
    }
  }
</script>