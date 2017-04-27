<template>
  <div class="panel-sharing shadow-on">
    <ul class="flex-between">
      <li class="cover">
        <nCover
          :src="cover"
          :target="'steps'"
          :id="sid"
          link />
      </li>
      <li class="detail">
        <nTitle
          :target="'steps'"
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
              v-for="item in users"
              :src="`/static/pictures/user${item}.jpg`"
              :key="item"
              :target="'user'"
              :id="item"
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
    data(){
      return {
        datas: {
          date: this.dateChange(this.$props.date),
          views: this.$props.views,
          hearts: this.$props.hearts,
          comments: this.$props.comments          
        }
      }
    },
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
      date: {
        typr: Number,
        required: true
      },
      views: {
        typr: Number,
        required: true
      },
      hearts: {
        typr: Number,
        required: true
      },
      comments: {
        typr: Number,
        required: true
      }
    },
    components: {
      nCover,
      nTitle,
      nContent,
      nUsers,
      nIcons
    },
    methods: {
      // 日期格式化
      dateChange( value ) {
        return this.$store.getters._global_dateChange( value )
      }
    }
  }
</script>