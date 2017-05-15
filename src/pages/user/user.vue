<template>
  <article>
    <div class="panel-user shadow-on">
      <ul class="flex-padding">
        <li class="avatar">
          <img class="avatar" :src="dataInf.avatar">
        </li>
        <li class="information">
          <ul class="flex-between-hang-padding">
            <li class="username">
              <strong>{{ dataInf.username }}</strong>
              <span>#{{ dataInf.uid }}</span>
            </li>
            <li><button class="icon" type="button"><i class="fa fa-pencil-square-o"></i></button></li>
          </ul>

          <ul class="flex-padding">
            <li class="email">
              <span>E-mail</span>
              <p>{{ dataInf.email }}</p>
            </li>
          </ul>          

          <ul class="flex-padding">
            <li class="introduce">
              <span>介绍</span>
              <p>{{ dataInf.introduce }}</p>
              <p></p>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="panel-note shadow-on">
      <div class="panel-tips"
           v-for="item in dataActive">
        <ul class="flex-between-hang-padding">
          <div class="message">

            <template v-if="item.type === 'steps'">
              <span class="mark put"></span>
              <span class="font-deep">在分享</span>
              <router-link :to="{ name:'steps',params:{'steps':item.param} }"
                         class="pointer"
                         tag="span">
               《{{ item.extra.title }}》
              </router-link>
              <span class="font-deep">中发布了新的内容</span>
            </template>

            <template v-if="item.type === 'sharings'">
              <span class="mark created"></span>
              <span class="font-deep">创建了</span>
              <router-link :to="{ name:'steps',params:{'steps':item.param} }"
                         class="pointer"
                         tag="span">
                《{{ item.extra.title }}》
              </router-link>
              <span class="font-deep">的新分享</span>
            </template>

            <template v-if="item.type === 'apply'">
              <span class="mark join"></span>
              <span class="font-deep">参与了</span>
              <router-link :to="{ name:'steps',params:{'steps':item.param} }"
                         class="pointer"
                         tag="span">
                《{{ item.extra.title }}》
              </router-link>
              <span class="font-deep">的分享</span>
            </template>
          </div>
          <div class="icons">{{ item.built | formatDate }}</div>
        </ul>
      </div>      
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
      // const uid = (this.$route.params.user)?this.$route.params.user:0
      this.$store.dispatch( '_user_getAbout' )
    }
  }
</script>