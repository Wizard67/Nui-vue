<template>
  <main>
    <headerPage></headerPage>
    <article>
      <p>这是message</p>
    </article>    
  </main>
</template>

<script>
  import headerPage from '@/containers/header-page'

  export default {
    components: {
      headerPage
    }
  }
</script>