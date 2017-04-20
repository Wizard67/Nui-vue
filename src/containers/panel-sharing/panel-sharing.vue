<template>
  <div class="panel-sharing shadow-on">
    <ul class="flex-between">
      <li class="cover">
        <nCover
          :src="cover"
          :target="'sharing'"
          :id="sid"
          link />
      </li>
      <li class="detail">
        <nTitle
          :target="'sharing'"
          :id="sid"
          link >
          {{ title }}
        </nTitle>
        <nContent>
          {{ summary }}
        </nContent>
        <ul class="flex-between-wrap-padding">
          <li class="flex-hang">
            <nUsers
              v-for="(item,key) in users"
              :src="item.avatar"
              :key="item.uid"
              :target="'user'"
              :id="item.uid"
              link />
          </li>
          <li class="flex-hang">
            <nIcons
              v-for="(item,key) in datas"
              :type="key"
              :key="key" >
              {{ item }}
            </nIcons>
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
        type: Number,
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
      datas: {
        typr: Object,
        required: true
      }
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