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
      const { stringify } = require('querystring');

      const params = { account:'nihaoah213' }
      $axios.post('post/login',
          stringify( params )
        )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        }) 
    },
    components: {
      headerPage
    }
  }
</script>