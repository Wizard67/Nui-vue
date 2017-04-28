<template>
  <article>
   <div class="panel-form shadow-on">
     <nTitle>创建分享</nTitle>
     <form>

       <div class="input-group">
         <span class="lamp"></span>
         <input type="text" v-model="title" placeholder="标题">
       </div>

       <div class="input-group">
         <span class="lamp"></span>
         <textarea v-model="summary" placeholder="介绍"></textarea>
       </div>

       <div class="input-group">
         <span class="lamp"></span>
         <input type="file" id="f1">
         <label for="f1" class="shadow-btn">选择封面</label>
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
        title: '',
        summary: '',
        cover: '/static/pictures/sharing.jpg'
      }
    },
    methods: {
      submitData(){

        // 获取表单数据
        const value = {
          title: this.title,
          summary: this.summary,
          cover: this.cover
        }

        // 提交数据
        this.$store.dispatch( '_sharingsCreates_addSharing', value )
      }
    },
    components: {
      nTitle,
      // nInput
    }
  }
</script>