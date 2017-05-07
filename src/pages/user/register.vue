<template>
  <article>
    <div class="panel-form shadow-on">
      <nTitle>注册账户</nTitle>
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

        <nButton slot="right"
                 v-throttle="submitData">
          Sign up
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
        this.$store.dispatch( '_register_registerAccount', value)
      }
    },
    components: {
      nTitle,
      ...nForm,
      nButton
    }
  }
</script>