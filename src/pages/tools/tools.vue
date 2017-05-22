<template>
  <article>
<!--     <template>
      <renderer :size="{ w: 600, h: 400 }">
        <scene>
          <camera :position="{ z: 15 }"></camera>
          <object3d :obj="mesh" :position="{ y: -200 }"></object3d>
        </scene>
      </renderer>
    </template> -->
  </article>

</template>

<script>
  // var obj = require('@/assets/obj.obj')

  export default {
    data(){
      return {
        mesh: obj
      }
    },
    // components: {
    //   panelWorks,
    //   nLoadmore
    // },
    // computed: {
    //   data() {
    //     return this.$store.state.works.list
    //   }
    // },
    // methods: {
    //   loadMore() {
    //     this.busy = true;

    //     setTimeout(() => {
    //       console.log('ok')
    //       this.busy = false;
    //     }, 1000);
    //   }
    // },
  }
</script>