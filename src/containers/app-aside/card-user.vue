<template>
  <div class="card-user">
    <router-link :to="{ name: 'user'}" class="shadow-btn">
      <img class="avatar" :src="avatar">
    </router-link>
    <ul class="flex-around">
      <li class="flex-column-center">
        <span>Topic</span>
        <span>{{ topic | formatNum }}</span>
      </li>
      <li class="flex-column-center">
        <span>Follower</span>
        <span>{{ follower | formatNum }}</span>
      </li>
      <li class="flex-column-center">
        <span>approval</span>
        <span>{{ approval | formatNum }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'card-user',
    created () {

    },
    computed: {
      avatar() {
        return this.$store.state.avatar
      },
      topic() {
        return this.$store.state.topic
      },
      follower() {
        return this.$store.state.follower
      },
      approval() {
        return this.$store.state.approval
      }
    }
  }
</script>