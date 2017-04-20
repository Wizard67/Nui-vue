<template>
  <div class="panel-note shadow-on">
    <ul class="flex-column">
      <li class="flex-hang-padding">
        <nUsers
          v-for="(item,key) in users"
          :src="item.avatar"
          :key="item.uid"
          :target="'user'"
          :id="item.uid"
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
    props: {
      users: {
        type: Array,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      datas: {
        typr: Object,
        required: true
      }
    },
    components: {
      nUsers,
      nContent,
      nIcons
    }
  }
</script>