<template>
  <div class="panel-step">
    <div class="icons">{{ built | formatDate('normal') }}</div>
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
          <nContent v-html="$options.filters.marked(content)">
          </nContent>
        </li>
        <li class="flex-end-hang-padding">
          <nIcons :type="'date'">{{ date | formatDate }}</nIcons>
          <nIcons :type="'time'">{{ time }}</nIcons>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import nUsers from '@/components/nUsers'
  import nContent from '@/components/nContent'
  import nIcons from '@/components/nIcons'
  import marked from '@/plugins/marked/marked'

  export default {
    name: 'panel-step',
    props: {
      nid: {
        required: true
      },
      users: {
        type: Array,
        required: true
      },
      content: {
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
    filters: {
      marked(value){
        return marked(value)
      }
    }
  }
</script>