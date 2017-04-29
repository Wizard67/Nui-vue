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
          date: this.dateChange(Number(this.$props.date)),
          // views: this.$props.views,
          hearts: Number(this.$props.hearts),
          // comments: this.$props.comments,
          items: Number(this.$props.items)     
        }
      }
    },
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
    },
    methods: {
      // 日期格式化
      dateChange( value ) {
        return this.$store.getters._global_dateChange( value )
      }
    }
  }
</script>