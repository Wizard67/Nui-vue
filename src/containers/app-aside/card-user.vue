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
    created () {

    },
    computed: {
      avatar() {
        return this.$store.state.avatar
      },
      topic() {
        return this.valueBirefly( this.$store.state.topic )
      },
      follower() {
        return this.valueBirefly( this.$store.state.follower )
      },
      approval() {
        return this.valueBirefly( this.$store.state.approval )
      }
    },
    methods: {
      // 数值简化
      valueBirefly( value ) {
        return this.$store.getters._global_valueBirefly( value )
      }
    }
  }
</script>