<template>
  <article>
    <div class="panel-form shadow-on">
      <nForm :style="'max-width: 600px'">
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
                 v-throttle="submitData">登录
        </nButton>
      </nForm>
    </div>   
  </article>
</template>

<script>
  import nForm from '@/components/nForm'
  import nButton from '@/components/nButton'

  export default {
    data(){
      return {
        account: 'test@test.com',
        password: 'test5690211'
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
      ...nForm,
      nButton
    }
  }
</script>