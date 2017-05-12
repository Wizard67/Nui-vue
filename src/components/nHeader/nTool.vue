<template>
  <div v-if="!isShow" class="tool">
    <ul class="flex-between">

      <!-- user -->
      <template v-if="this.route === 'user'">
        <li><p>用户信息</p></li>
        <li>
          <button class="shadow-btn">关注</button>
        </li>        
      </template>
      
      <!-- message -->
      <template v-if="this.route === 'messages'">
        <li><p>信息列表</p></li>      
      </template>
      
      <!-- favorites -->
      <template v-if="this.route === 'favorites'">
        <li><p>收藏列表</p></li>      
      </template>

      <!-- login -->
      <template v-if="this.route === 'login'">
        <li><p>用户登录</p></li>
        <li>
          <button type="button" class="shadow-btn" @click="_login_toRegister">注册</button>
        </li>       
      </template>

      <!-- register -->
      <template v-if="this.route === 'register'">
        <li><p>注册账号</p></li>      
      </template>

      <!-- sharings -->
      <template v-if="this.route === 'sharings'">
        <li><p>分享列表</p></li>      
      </template>

      <!-- sharingsCreates -->
      <template v-if="this.route === 'sharingsCreates'">
        <li><p>创建分享</p></li>      
      </template>

      <!-- steps -->
      <template v-if="this.route === 'steps'">
        <li><p>{{ title }}</p></li>
        <li>
          <button type="button" class="shadow-btn" @click="_steps_join">参与</button>
          <template>
            <button v-if="iskeep" type="button" class="shadow-action" @click="_steps_favorite">取消</button>
            <button v-else type="button" class="shadow-btn" @click="_steps_favorite">收藏</button>
          </template>
        </li>     
      </template>

      <!-- stepsCreates -->
      <template v-if="this.route === 'stepsCreates'">
        <li><p>创建步骤</p></li>      
      </template>

    </ul>
  </div>
</template>

<script>
  export default {
    template: '<App/>',
    data(){
      return {
        title : '[标题]',
        iskeep: 0
      }
    },
    props: {
      isShow: {
        type: Boolean,
        require: true
      },
      route: {
        type: String,
        require: true
      }
    },
    watch: {
      route(newVal){
        if ( newVal === 'steps' ) this._steps_default()
      }
    },
    methods: {
      _login_toRegister(){
        this.$router.push({ name: 'register'})
      },
      _steps_default(){
        let sid = this.$route.params.steps
        this.$store.dispatch( '_steps_default', sid ).then((res)=>{
          this.title = res.title
          this.iskeep = Number(res.iskeep)
        })
      },
      _steps_join(){
        let sid = this.$route.params.steps
        this.$store.dispatch( '_steps_join', sid )
      },
      _steps_favorite(){
        let sid = this.$route.params.steps
        this.$store.dispatch( '_steps_favorite', sid ).then((res)=>{
          this.iskeep = Number(res)
        })
      }
    }
  }
</script>