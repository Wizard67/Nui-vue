<template>
  <div class="card-user">
    <router-link :to="{ name: 'user'}" class="shadow-btn">
      <img class="avatar" :src="avatar">
    </router-link>
    <ul class="flex-around">
      <li class="flex-column-center">
        <span>Topic</span>
        <span>{{ topic }}</span>
      </li>
      <li class="flex-column-center">
        <span>Follower</span>
        <span>{{ follower }}</span>
      </li>
      <li class="flex-column-center">
        <span>approval</span>
        <span>{{ approval }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'card-user',
    data () {
      return {
      }
    },
    computed: {
      avatar() {
        return this.$store.getters._cardUser_getValue('avatar')
      },
      topic() {
        return this.$store.getters._cardUser_getValue('topic')
      },
      follower() {
        return this.$store.getters._cardUser_getValue('follower')
      },
      approval() {
        return this.$store.getters._cardUser_getValue('approval')
      }
    }
  }
</script>