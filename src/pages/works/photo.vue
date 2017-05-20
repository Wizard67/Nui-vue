<template>
  <article>
    <div class="panel-note shadow-on">
      <ul class="flex-column">
        <li class="flex-hang-padding">
          <nUsers
            :src="data.avatar"
            :uid="Number(data.uid)"
            link />
        </li>
        <li>
          <nContent>
            <img :src="`https://image.wizard67.com/${data.cover}`">
          </nContent>
        </li>
        <li class="flex-end-hang-padding">
          <nIcons :type="'date'">{{ data.built | formatDate }}</nIcons>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
  import nUsers from '@/components/nUsers'
  import nContent from '@/components/nContent'
  import nIcons from '@/components/nIcons'

  export default {
    components: {
      nContent,
      nUsers,
      nIcons
    },
    computed: {
      data() {
        return this.$store.state.photo.list
      }
    },
    created(){
      const wid = (this.$route.params.works)?this.$route.params.works:1
      this.$store.dispatch( '_photo_getPhoto', wid )
    }
  }
</script>