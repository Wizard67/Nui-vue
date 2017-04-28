<template>
  <article>
    <div class="panel-note shadow-on">
      <h2 class="title">用户信息</h2>
      <ul>
        <li class="flex-padding-column">
          <img class="avatar" :src="avatar">
          <p>username</p>
          <p>uid</p>
          <p>email</p>
          <p>some introduce</p>
          <p>works & sharings</p>
        </li>
      </ul>
    </div>     
  </article>
</template>

<script>

  export default {
    data(){
      return {
        avatar: this.$store.state.avatar,
      }
    },
    created(){

    },
    components: {

    }
  }
</script>