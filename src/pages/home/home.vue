<template>
  <article>
  </article>
</template>

<script>
  import Test from '@/components/test'

  export default {
    data() {
      return {
        username:"",
        showErrorLabel:false,
      }
    },
    components: {
      Test
    },
    methods: {
      userNameChange(){
        if(this.check(this.username)){
            this.showErrorLabel = false;
        }else{
            this.showErrorLabel = true;
        }
      }
    }
  }
</script>