<template>
  <article>
    <div class="panel-form shadow-on">
      <h2 class="title">注册账户</h2>
      <nForm>
        <nInput :name="'test'"
                :type="'email'"
                :placeholder="'email@email.com'"

                v-model="account">
        </nInput>
        <nInput :name="'test1'"
                :type="'password'"
                :placeholder="'password'"

                v-model="password">
        </nInput>

        <ul class="flex-end">
          <li>
            <button @click.prevent="submitData" type="submit" class="shadow-btn">Sign up</button>
          </li>
        </ul>
      </nForm>
      {{account}}
      
    </div>
  </article>
</template>

<script>
  import nForm from '@/components/nForm'

  export default {
    data(){
      return {
        account: '',
        password: ''
      }
    },
    watch: {
      error(newVal){
        alert('change')
      }
    },
    methods: {
      submitData(){
        alert('nihaio')
        return
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
      ...nForm
    }
  }
</script>