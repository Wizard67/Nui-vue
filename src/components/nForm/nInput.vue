<template>
  <div class="input-group">
    <!-- input's type is email -->
    <template v-if="type === 'email'">
      <span class="lamp" :class="lampClass"></span>
      <input type="text" :name="name" :placeholder="placeholder"
             v-model="value"
             @focus="focus" @blur="blur">      
    </template>
    
    <!-- input's type is password -->
    <template v-if="type === 'password'">
      <span class="lamp" :class="lampClass"></span>
      <input type="password" :name="name" :placeholder="placeholder"
             v-model="value"
             @focus="focus" @blur="blur">
    </template>

  </div>
</template>

<script>
  import rule from './rule'

  export default {
    name: 'nInput',
    data() {
      return{
        value: '',
        state: 'none',
        reg: {
          ...rule
        }
      }
    },
    props: {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      placeholder: {
        type: String
      }
    },
    computed: {
      lampClass(){
        if (this.state === 'focus') return 'focus'
        if (this.state === 'error') return 'error'
        if (this.state === 'success') return 'success'

        return 'none'
      }
    },
    methods:{
      focus(){
        if ( this.state === 'none') {
          this.state = 'focus'
        }else{
          this.test(this.type)
        }
      },
      blur(){
        this.test(this.type)
      },
      test(rule){
        if ( !this.reg[rule]['rule'].test(this.value) ){
          this.state = 'error'
          // 触发信息通知
          this.$store.commit('_global_changeMessage',{ type:this.state, content:this.reg[rule]['message'] })
        }else{
          this.state = 'success'
          // 将正确结果返回父级
          this.$emit('input', event.target.value)
        }
      }
    }
  }
</script>