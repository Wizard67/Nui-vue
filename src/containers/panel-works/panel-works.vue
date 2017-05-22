<template>
  <div class="panel-works shadow-on">
    <nCover
      :src="cover"
      :target="'photo'"
      :id="Number(wid)"
      link />
    <ul class="flex-between-wrap-padding">
      <li class="flex-hang">
        <nUsers
          :src="avatar"
          :key="uid"
          :id="Number(uid)"
          link />
      </li>
      <li class="flex-hang">
        <nIcons :type="'hearts'">{{ hearts }}</nIcons>
<!--         <nIcons :type="'date'">{{ built | formatDate }}</nIcons> -->
      </li>
    </ul>
  </div>

</template>

<script>
  import nCover from '@/components/nCover'
  import nUsers from '@/components/nUsers'
  import nIcons from '@/components/nIcons'

  export default {
    name: 'panel-works',
    props: {
      wid:{
        required: true
      },
      cover: {
        required: true
      },
      uid: {
        required: true
      },
      avatar: {},
      built: {
        required: true
      },
      hearts: {
        required: true
      }
    },
    components: {
      nCover,
      nUsers,
      nIcons
    }
  }
</script>