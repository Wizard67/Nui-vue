<template>
  <div class="panel-step">
    <div class="icons">{{ builtDate }}</div>
    <div class="panel-note shadow-on">
      <ul class="flex-column">
        <li class="flex-hang-padding">
          <nUsers
            v-for="item in users"
            :src="item.avatar"
            :key="item"
            :target="'user'"
            :id="Number(item.uid)"
            link />
        </li>
        <li>
          <nContent>
            {{ content }}
          </nContent>
        </li>
        <li class="flex-end-hang-padding">
          <nIcons
            v-for="(item,key) in datas"
            :type="key"
            :key="key" >
            {{ item }}
          </nIcons>        
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import nUsers from '@/components/nUsers'
  import nContent from '@/components/nContent'
  import nIcons from '@/components/nIcons'

  export default {
    name: 'panel-step',
    data(){
      return {
        datas: {
          date: this.dateChange(Number(this.$props.date)),
          time: Number(this.$props.time)
        },
        builtDate: this.dateChange(Number(this.$props.built), 'only')
      }
    },
    props: {
      nid: {
        required: true
      },
      users: {
        type: Array,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      date: {},
      built: {},
      time: {},
    },
    components: {
      nUsers,
      nContent,
      nIcons
    },
    methods: {
      // 日期格式化
      dateChange( value, type ) {
        return this.$store.getters._global_dateChange( value, type )
      }
    }
  }
</script>