<template>
  <article>
   <div class="panel-form shadow-on">
     <nTitle>创建步骤</nTitle>
     <form>

       <div class="input-group">
         <span class="lamp"></span>
         <input type="text" v-model="users" placeholder="创作人">
       </div>

       <div class="input-group">
         <span class="lamp"></span>
         <textarea v-model="content" placeholder="内容"></textarea>
       </div>

       <ul class="flex-end">
         <li>
           <button @click.prevent="submitData" type="submit" class="shadow-btn">Create</button>
         </li>
       </ul>
     </form>
   </div>
  </article>
</template>

<script>
  import nTitle from '@/components/nTitle'
  // import nInput from '@/components/nInput'

  export default {
    data(){
      return {
        users: '',
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
      // nInput
    }
  }
</script>