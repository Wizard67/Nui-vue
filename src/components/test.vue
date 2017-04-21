<template>
  <div>
    <input v-if="1" type="text" :value="value" @input="update">
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