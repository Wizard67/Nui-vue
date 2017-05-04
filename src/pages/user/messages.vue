<template>
  <article>
    <div class="panel-tips shadow-on"
        v-for="item in data">
      <ul class="flex-between-hang-padding">
        <div class="message">
          <ul class="flex-between-hang">
            <li>
              <template v-if=" item.type === 'apply' ">
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
              </template>              
            </li>
            <li class="flex-padding">
              <div class="icons">{{ item.built | formatDate }}</div>
            </li>
          </ul>

        </div>
        <div class="method"
             v-if="!Number(item.isread)">
          <button @click="deal(item.mid,0)" class="shadow-btn">拒绝</button>
          <button @click="deal(item.mid,1)" class="shadow-btn">同意</button>
        </div>
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
    methods: {
      deal( mid, result ) {
        const params = [ mid, result ]
        this.$store.dispatch( '_user_sharingsResult', params )
      }
    },
    mounted(){
      this.$store.dispatch( '_user_getMessages' )
    }
  }
</script>