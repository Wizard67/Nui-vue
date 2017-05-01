<template>
  <div class="user">
    <ul class="flex-star-padding">
      <li>
        <router-link v-if="link" :to="{ name:target, params:{[target]: id} }" class="avatar shadow-btn" :src="src" tag="img"/>
        <img v-else class="avatar shadow-btn" :src="src">
      </li>
      <li class="flex-column-padding">
        <span class="author">{{ username }}</span>
        <span class="introduce">{{ introduce }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'nUser',
    props: {
      src: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true
      },
      introduce: {
        type: String,
        required: true
      },
      link: {
        type: Boolean,
        dafault: false
      },
      target: {
        type: String,
        default: NaN
      },
      id: {
        type: Number,
        required: NaN
      }
    }
  }
</script>