<template>
  <article>
    <div class="panel-note shadow-on">
      <ul class="flex-padding-column">
        <li v-for="item in data" >
          <template v-if=" item.type === 'sharings' ">
            <span>分享：</span>
            <router-link :to="{ name:'steps', params:{ steps:Number(item.param)} }"
                          class="pointer"
                          tag="span">
                          《{{ item.extra.title }}》
            </router-link>
          </template>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
  export default {
    computed: {
      data() {
        return this.$store.state.favorites.list
      }
    },
    mounted(){
      this.$store.dispatch( '_user_getFavorites' )
    }
  }
</script>