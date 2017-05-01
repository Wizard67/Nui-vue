<template>
  <div class="panel-sharing shadow-on">
    <ul class="flex-between">
      <li class="cover">
        <nCover
          :src="cover"
          :target="'steps'"
          :id="Number(sid)"
          link />
      </li>
      <li class="detail">
        <nTitle
          :target="'steps'"
          :id="Number(sid)"
          link >
          {{ title }}
        </nTitle>
        <nContent>
          {{ summary }}
        </nContent>
        <ul class="flex-between-wrap-padding">
          <li class="flex-hang">
            <nUsers
              v-for="item in users"
              :src="item.avatar"
              :key="item"
              :target="'user'"
              :id="Number(item.uid)"
              link />
          </li>
          <li class="flex-hang">
            <nIcons :type="'date'">{{ date | formatDate }}</nIcons>
            <nIcons :type="'hearts'">{{ hearts }}</nIcons>
            <nIcons :type="'items'">{{ items }}</nIcons>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import nCover from '@/components/nCover'
  import nTitle from '@/components/nTitle'
  import nContent from '@/components/nContent'
  import nUsers from '@/components/nUsers'
  import nIcons from '@/components/nIcons'

  export default {
    name: 'panel-sharing',
    props: {
      sid:{
        required: true
      },
      cover: {
        typr: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      summary: {
        type: String,
        required: true
      },
      users: {
        type: Array,
        required: true
      },
      date: {},
      views: {},
      hearts: {},
      comments: {},
      items: {}
    },
    components: {
      nCover,
      nTitle,
      nContent,
      nUsers,
      nIcons
    }
  }
</script>