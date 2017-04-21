<template>
  <main>
    <headerPage></headerPage>
    <article>
      <div class="panel-note shadow-on">
        <h2 class="title">用户信息</h2>
        <ul>
          <li class="flex-padding">
            <img class="avatar" :src="avatar">
          </li>
        </ul>
      </div>   
    </article>
  </main>
</template>

<script>
  import headerPage from '@/containers/header-page'

  export default {
    data(){
      return {
        avatar: require('@/assets/pictures/user.jpg'),
      }
    },
    created(){
    },
    components: {
      headerPage
    }
  }
</script>