<template>
  <main>
    <headerPage></headerPage>
    <article>
      <div class="panel-form shadow-on">
        <h2 class="title">用户登录</h2>
        <form>
          <div class="input-group">
            <span class="lamp"></span>
            <input type="text" v-model="account" placeholder="email@email.com">
          </div>

          <div class="input-group">
            <span class="lamp"></span>
            <input type="password" v-model="password" placeholder="password">
          </div>

          <ul class="flex-between">
            <li>
              <router-link :to="{name:'register'}" class="shadow-btn" tag="button">注册</router-link>
            </li>
            <li>
              <button @click.prevent="submitData" type="submit" class="shadow-btn">Sign in</button>
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
    data(){
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      submitData(){
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