<template>
  <article>
    <div class="panel-note shadow-on">
      <h2 class="title">信息通知</h2>
      <ul class="flex-padding-column">
        <li v-for="item in data" >
          {{ item.built | formatDate }}
          <template v-if=" item.type === 'sharingsApply' ">
            <router-link :to="{ name:'user', params:{ user:Number(item.fuid)} }"
                          class="pointer"
                          tag="span">
                          {{ item.username }}
            </router-link>
            请求参与到分享
            <router-link :to="{ name:'steps', params:{ steps:Number(item.param)} }"
                          class="pointer"
                          tag="span">
                          《{{ item.title }}》
            </router-link>
            之中
            <button class="shadow-btn">拒绝</button>
            <button class="shadow-btn">同意</button>
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
        return this.$store.state.messages.list
      }
    },
    mounted(){
      this.$store.dispatch( '_user_getMessages' )
    }
  }
</script>