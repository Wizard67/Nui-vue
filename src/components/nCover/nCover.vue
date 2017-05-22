<template>
  <router-link v-if="link"
              :to="{ name:target, params:{[target]: id} }"
              :src="src | pic"
              class="cover pointer"
              tag="img"/>
  <img v-else
       class="cover pointer"
       :style="style"
       v-lazy="src">
</template>

<script>
  export default {
    name: 'nCover',
    props: {
     src: {
      required: true
     },
     link: {
      type: Boolean,
      default: false
     },
     target: {
      dafault: NaN
     },
     id: {
      type: Number,
      dafault: NaN
     }
    },
    filters: {
      pic(src){
        const imgCdn = 'https://image.wizard67.com/'
        if ( src.indexOf('static') >= 0) {
          return src
        }else{
          return imgCdn+src
        }
      }
    }
  }
</script>