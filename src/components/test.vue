<template>
  <div>
    <input type="text" :value="value" @input="update">
    <p>{{ test }}</p>
  </div>
</template>

<script>
  export default {
    props: [
      'value'
    ],
    data(){
      return{
        test: '??'
      }
    },
    methods: {
      update(event){
        console.log( event )
        this.$emit('input', event.target.value)
      }
    }
  }
</script>