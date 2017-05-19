<template>
  <article>
   <div class="panel-form shadow-on">
     <nForm>
        <nInput :name="'cover'"
                :type="'picture'"
                :size="{ width: '280', height: '216'}"
                :placeholder="'选择要上传的作品'"

                v-model="cover">
        </nInput>

        <nButton slot="right"
                 v-throttle="">发布
        </nButton>

     </nForm>

   </div>
  </article>
</template>

<script>
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

        for(let item in this.$data) {
          if ( !this.$data[item] ) {
            return this.$message(this,'error','请将表单填写完整')
          }
        }

        this.$store.dispatch( '_global_putPicture', this.cover )
        .then((res) => {
          this.cover = res
          const value = {...this.$data}
          this.$store.dispatch( '_sharingsCreates_addSharing', value )
        })

      }
    },
    components: {
      ...nForm,
      nButton
    }
  }
</script>