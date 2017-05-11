<template>
  <article>
   <div class="panel-form shadow-on">
     <nTitle>创建步骤</nTitle>
     <form>
       <mdEditor></mdEditor>

<!--        <ul class="flex-end">
         <li>
           <button @click.prevent="submitData" type="submit" class="shadow-btn">Create</button>
         </li>
       </ul> -->
     </form>
   </div>
  </article>
</template>

<script>
  import nTitle from '@/components/nTitle'
  import mdEditor from '@/containers/md-editor'

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
      nTitle,
      mdEditor
    }
  }
</script>