<template>
  <main>
    <headerPage></headerPage>
    <article>
      <div class="panel-form shadow-on">
        <h2 class="title">Login</h2>
        <form>
          <div class="input-group">
            <span class="lamp"></span>
            <input type="text" v-model="account" placeholder="email@email.com">
          </div>

          <div class="input-group">
            <span class="lamp"></span>
            <input type="password" v-model="password" placeholder="password">
          </div>

          <ul class="flex-end">
            <li>
              <button @click.prevent="submitdata" type="submit" class="shadow-btn">Sign in</button>
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
    created(){
      this.account = this.$store.state.login.account,
      this.password = this.$store.state.login.password
    },
    methods: {
      submitdata(){
        // 获取表单数据
        let value = {}
        value['account'] = this.account
        value['password'] = this.password

        // 提交数据
        this.$store.dispatch( '_login_checkAccount', value )
      }
    },
    components: {
      headerPage
    }
  }
</script>