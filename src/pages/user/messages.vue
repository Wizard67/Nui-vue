<template>
  <article>
    <div class="panel-message shadow-on"
         v-for="item in data">
      <ul class="flex-padding">
        <!-- apply -->
        <template  v-if="item.type === 'apply'">
          <li> 
            <nUsers
              :src="item.avatar"
              :target="'user'"
              :id="Number(item.fuid)"
              link/>
          </li>
          <li class="flex-full">
            <ul class="flex-column-full-padding">
              <li>
                <span class="font-deep">请求参与到分享</span>
                <router-link :to="{ name:'steps', params:{ steps:Number(item.param)} }"
                              class="pointer"
                              tag="span">
                              《{{ item.title }}》
                </router-link>
                <span class="font-deep">之中</span>
                <small class="font-deep">{{ item.built | formatDate }}</small>
              </li>
              <li v-if="!Number(item.isread)" class="flex-end">
                <button @click="deal(item.mid,0)" class="shadow-btn">拒绝</button>
                <button @click="deal(item.mid,1)" class="shadow-btn">同意</button>
              </li>
            </ul>
          </li>          
        </template>
      </ul>
    </div>
  </article>
</template>

<script>
  import nUsers from '@/components/nUsers'
  export default {
    components: {
      nUsers
    },
    computed: {
      data() {
        return this.$store.state.messages.list
      }
    },
    methods: {
      deal( mid, result ) {
        const params = {mid:mid,result:result}
        this.$store.dispatch( '_user_sharingsResult', params )
      }
    },
    mounted(){
      this.$store.dispatch( '_user_getMessages' )
    }
  }
</script>