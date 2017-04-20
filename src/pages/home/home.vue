<template>
  <main>
    <headerPage></headerPage>
    <article>
      <p>这是home</p>
      <Test v-model="test"></Test>
    </article>
    <p>{{ test }}</p>
  </main>
</template>

<script>
  import headerPage from '@/containers/header-page'
  import Test from '@/components/test'

  export default {
    data(){
      return {
        test: '你好'
      }
    },
    components: {
      headerPage,
      Test
    }
  }
</script>