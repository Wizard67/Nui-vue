<template>
  <article>
    <div class="panel-form shadow-on">
      <h2 class="title">注册账户</h2>
      <form>
        <div class="input-group">
          <span class="lamp"></span>
          <input type="text" v-model="account" placeholder="email@email.com">
        </div>

        <div class="input-group">
          <span class="lamp"></span>
          <input type="password" v-model="password" placeholder="password">
        </div>

        <div class="input-group">
          <span class="lamp"></span>
          <input type="password" placeholder="password">
        </div>

        <ul class="flex-end">
          <li>
            <button @click.prevent="submitData" type="submit" class="shadow-btn">Sign up</button>
          </li>
        </ul>
      </form>
    </div>
  </article>
</template>

<script>

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
        const value = {
          account: this.account,
          password: this.password
        }

        // 提交数据
        this.$store.dispatch( '_register_registerAccount', value)
      }
    },
    components: {
      
    }
  }
</script>