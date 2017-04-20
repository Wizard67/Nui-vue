<template>
  <div class="panel-comment shadow-on">
    <nUser
      :src="user.avatar"
      :username="user.username"
      :introduce="user.introduce"
      :id="user.uid"
      :target="'user'"
      link />

    <ul class="flex-star">
      <li class="flex-padding">
        <div style="width: 40px;height: 40px;"></div>
      </li>
      <li>
        <nContent>
          {{ content }}
        </nContent>
      </li>
    </ul>
    <ul class="flex-end-padding">
      <li class="flex-hang">
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
  import nUser from '@/components/nUser'
  import nContent from '@/components/nContent'
  import nIcons from '@/components/nIcons'

  export default {
    name: 'comment',
    props: {
      cid: {
        type: Number,
        required: true
      },
      user: {
        type: Object,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      datas: {
        type: Object,
        required: true
      }
    },
    components: {
      nUser,
      nContent,
      nIcons
    }
  }
</script>