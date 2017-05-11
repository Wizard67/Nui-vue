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
      

    </ul>
  </div>
</template>

<script>
  export default {
    template: '<App/>',
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
  }
</script>