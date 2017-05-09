<template>
  <article>
   <div class="panel-form shadow-on">
     <nTitle>创建分享</nTitle>
     <nForm>
        <nInput :name="'cover'"
                :type="'picture'"
                :size="{ width: '280', height: '216'}"
                :placeholder="'选择封面'"

                v-model="cover">
        </nInput>

        <nInput :name="'title'"
                :type="'title'"
                :placeholder="'标题'"

                v-model="title">
        </nInput>

        <nInput :name="'summary'"
                :type="'summary'"
                :placeholder="'介绍'"

                v-model="summary">
        </nInput>
        <!-- <canvas id="canvas"></canvas> -->
        <nButton slot="right"
                 v-throttle="submitData">Create
        </nButton>

     </nForm>

   </div>
  </article>
</template>

<script>
  import nTitle from '@/components/nTitle'
  import nForm from '@/components/nForm'
  import nButton from '@/components/nButton'

  export default {
    data(){
      return {
        title: '',
        summary: '',
        cover: ''
      }
    },
    methods: {
      submitData(){

        // 获取表单数据
        for(let item in this.$data) {
          if ( !this.$data[item] ) {
            return this.$message(this,'error','请将表单填写完整')
          }
        }

        this.$store.dispatch( '_global_putPicture', this.cover )
        .then((res) => {
          this.cover = res
          const value = {...this.$data}

          // 提交数据
          this.$store.dispatch( '_sharingsCreates_addSharing', value )
        })

      }
    },
    components: {
      nTitle,
      ...nForm,
      nButton
    }
  }
</script>