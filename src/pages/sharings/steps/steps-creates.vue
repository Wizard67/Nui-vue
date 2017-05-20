<template>
  <article>
   <div class="panel-form shadow-on">

     <nForm>
       <mdEditor v-model="content"></mdEditor>

        <nButton slot="right"
                 v-throttle="submitData">创建
        </nButton>
     </nForm>

   </div>

  </article>
</template>

<script>
  import nForm from '@/components/nForm'
  import mdEditor from '@/containers/md-editor'
  import nButton from '@/components/nButton'

  export default {
    data(){
      return {
        content: ''
      }
    },
    methods: {
      submitData(){
        // 获取表单数据
        const value = {
          sid: this.$route.params.steps,
          content: this.content
        }

        // 提交数据
        this.$store.dispatch( '_stepCreates_addStep', value )
      }
    },
    components: {
      ...nForm,
      mdEditor,
      nButton
    }
  }
</script>