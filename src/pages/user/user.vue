<template>
  <article>
    <div class="panel-note shadow-on">
      <h2 class="title">用户信息</h2>
      <ul>
        <li class="flex-padding-column">
          <img class="avatar" :src="dataInf.avatar">
          <p>username: {{ dataInf.username }}</p>
          <p>uid: #{{ dataInf.uid }}</p>
          <p>email: {{ dataInf.email }}</p>
          <p>introduce: {{ dataInf.introduce }}</p>
        </li>
      </ul>
    </div>
    <div class="panel-note shadow-on">
      <ul class="flex-padding-column">
        <li v-for="item in dataActive">
          {{ item.built | formatDate }}
          <template v-if="item.type === 'steps'">
            在分享
            <router-link :to="{ name:'steps',params:{'steps':item.param} }"
                       class="pointer"
                       tag="span">
             《{{ item.extra.title }}》
            </router-link>
            中发布了新的内容
          </template>
          <template v-if="item.type === 'sharings'">
            创建了
            <router-link :to="{ name:'steps',params:{'steps':item.param} }"
                       class="pointer"
                       tag="span">
              《{{ item.extra.title }}》
            </router-link>
            的新分享
          </template>
          <template v-if="item.type === 'apply'">
            参与了
            <router-link :to="{ name:'steps',params:{'steps':item.param} }"
                       class="pointer"
                       tag="span">
              《{{ item.extra.title }}》
            </router-link>
            的分享
          </template>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
  export default {
    computed: {
      dataInf() {
        return this.$store.state.user.inf
      },
      dataActive() {
        return this.$store.state.user.active
      }
    },
    mounted(){
      const uid = (this.$route.params.user)?this.$route.params.user:0
      this.$store.dispatch( '_user_getAbout', uid )
    }
  }
</script>