<template>
  <article>
    <panelStep
      v-for="(item,key) in data"
      :nid="item.ssid"
      :users="item.users"
      :content="item.content"
      :date="item.date"
      :built="item.built"
      :time="item.time"
      :key="item.ssid">
    </panelStep>
  </article>
</template>

<script>
  import panelStep from '@/containers/panel-step'

  export default {
    components: {
      panelStep
    },
    computed: {
      data() {
        return this.$store.state.Steps.list
      }
    },
    mounted(){
      const sid = this.$route.params.steps
      this.$store.dispatch( '_steps_getSteps', sid)
    }
  }
</script>