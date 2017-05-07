<template>
  <article>
    <div class="panel-form shadow-on">
      <nTitle>用户登录</nTitle>
      <nForm>
        <nInput :name="'email'"
                :type="'email'"
                :placeholder="'email@email.com'"

                v-model="account">
        </nInput>
        <nInput :name="'password'"
                :type="'password'"
                :placeholder="'password'"

                v-model="password">
        </nInput>

        <router-link slot="right"
                     :to="{name:'register'}" class="shadow-btn" tag="button" type="button">注册
        </router-link>

        <nButton slot="right"
                 v-throttle="submitData">Sign in
        </nButton>
      </nForm>
    </div>   
  </article>
</template>

<script>
  import nTitle from '@/components/nTitle'
  import nForm from '@/components/nForm'
  import nButton from '@/components/nButton'

  export default {
    data(){
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      submitData(){

        for(let item in this.$data) {
          if ( !this.$data[item] ) {
            return this.$message(this,'error','请将表单填写完整')
          }
        }

        const value = {...this.$data}

        // 提交数据
        this.$store.dispatch( '_login_checkAccount', value )
      }
    },
    components: {
      nTitle,
      ...nForm,
      nButton
    }
  }
</script>