<template>
  <div class="panel-note shadow-on">
    <ul class="flex-column">
      <li class="flex-hang-padding">
        <nUsers
          v-for="item in users"
          :src="`/static/pictures/user${item}.jpg`"
          :key="item"
          :target="'user'"
          :id="item"
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
</template>

<script>
  import nUsers from '@/components/nUsers'
  import nContent from '@/components/nContent'
  import nIcons from '@/components/nIcons'

  export default {
    name: 'panel-note',
    data(){
      return {
        datas: {
          date: this.dateChange(this.$props.date),
          time: this.$props.time
        },
        builtDate: this.dateChange(this.$props.built)
      }
    },
    props: {
      nid: {
        type: Number,
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
      date: {
        typr: Number,
        required: true
      },
      built: {
        typr: Number,
        required: true
      },
      time: {
        typr: Number,
        required: true
      },
    },
    components: {
      nUsers,
      nContent,
      nIcons
    },
    methods: {
      // 日期格式化
      dateChange( value ) {
        return this.$store.getters._global_dateChange( value, 'only')
      }
    }
  }
</script>