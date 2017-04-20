<template>
  <main>
    <headerPage></headerPage>
    <article>
      <div class="panel-form shadow-on">
        <h2 class="title">注册账户</h2>
        <form>
          <div class="input-group">
            <span class="lamp"></span>
            <input type="text" name="" placeholder="email@email.com">
          </div>

          <div class="input-group">
            <span class="lamp"></span>
            <input type="password" name="" placeholder="password">
          </div>

          <ul class="flex-end">
            <li>
              <button type="button" class="shadow-btn">Sign up</button>
            </li>
          </ul>
        </form>
      </div>   
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