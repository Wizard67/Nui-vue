<template>
  <main>
    <headerPage></headerPage>
    <article>
     <div class="panel-form shadow-on">
       <nTitle>创建分享</nTitle>
       <form>
         <nInput
          :type="'input'"
          :name = "'email'"
          :placeholder="'write somethings'" />

         <div class="input-group">
           <span class="lamp"></span>
           <input type="text" name="" placeholder="标题">
         </div>

         <div class="input-group">
           <span class="lamp"></span>
           <textarea placeholder="介绍"></textarea>
         </div>

         <div class="input-group">
           <span class="lamp"></span>
           <input type="file" id="f1" name="">
           <label for="f1" class="shadow-btn">选择封面</label>
         </div>

         <ul class="flex-end">
           <li>
             <button type="button" class="shadow-btn">BUTTON</button>
           </li>
         </ul>
       </form>
     </div>
    </article>
  </main>
</template>

<script>
  import headerPage from '@/containers/header-page'
  import nTitle from '@/components/nTitle'
  import nInput from '@/components/nInput'

  export default {
    data(){
      return{
        nihao: Object
      }
    },
    components: {
      headerPage,
      nTitle,
      nInput
    }
  }
</script>