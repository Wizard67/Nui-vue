<template>
  <div class="input-group">

    <!-- input's type is password -->
    <template v-if="inputType === 'password'">
      <span class="lamp" :class="lampClass"></span>
      <input type="password" :name="name" :placeholder="placeholder"
             v-model="value"
             @focus="focus" @blur="blur">
    </template>

    <!-- input's type is text -->
    <template v-if="inputType === 'text'">
      <span class="lamp" :class="lampClass"></span>
      <input type="text" :name="name" :placeholder="placeholder"
             v-model="value"
             @focus="focus" @blur="blur">      
    </template>

    <!-- input's type is textarea -->
    <template v-if="inputType === 'textarea'">
      <span class="lamp" :class="lampClass"></span>
      <textarea :name="name" :placeholder="placeholder"
                v-model="value"
                @focus="focus" @blur="blur">
      </textarea>
    </template>

    <!-- input's type is file -->
    <template v-if="inputType === 'file'">
      <span class="lamp" :class="lampClass"></span>
      <input type="file" :name="name" :id="name"
             @change="change">
      <label :for="name">
        {{ placeholder }}
      </label>
    </template>

  </div>
</template>

<script>
  import rule from './rule'

  export default {
    name: 'nInput',
    data() {
      return{
        value: '',
        state: 'none',
        rule: rule,

        hasAllowFile: false,
        sizeMax: 1024,
        file: '',
        labelStyle: ''
      }
    },
    props: {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      placeholder: {
        type: String
      },
      size: {
        type: Object,
        default() {
          return {width: '100%',height: '50%'}
        }
      }
    },
    mounted(){
      if ( this.type === 'picture') {
        // set the picture's size
        this.setPictureSize()
      }
    },
    computed: {
      inputType(){
        return this.rule[this.type]['type'] || 'text'
      },
      lampClass(){
        if (this.state === 'focus') return 'focus'
        if (this.state === 'error') return 'error'
        if (this.state === 'success') return 'success'

        return 'none'
      }
    },
    methods:{
      // just text input
      focus(){
        if ( this.state === 'none') {
          this.state = 'focus'
        }else{
          this.test(this.type)
        }
      },
      blur(){
        this.test(this.type)
      },
      test(type){
        if ( !this.rule[type]['reg'].test(this.value) ){
          this.state = 'error'
          this.$message(this, this.state, this.rule[type]['message'])
          // clear this input value at father-component
          this.$emit('input', '')
        }else{
          this.state = 'success'
          // emit the right value
          this.$emit('input', event.target.value)
        }
      },

      // file input
      change(event){
        this.cleanInf()

        this.file = event.target.files[0]
        if ( !this.file ) {
          this.state = 'error'
          this.$message( this, 'erroe', '请选择一张封面图片' )
          return
        }

        this.checkFileInf()

        this.handlePicture()
        this.showPicture()
      },
      cleanInf(){
        this.file = ''
        this.labelStyle.backgroundImage = ''
      },
      setPictureSize(){
        this.labelStyle = this.$el.getElementsByTagName('label')[0].style
        this.labelStyle.width = this.size.width+'px'
        this.labelStyle.height = this.size.height+'px'
      },
      checkFileInf(){
        this.hasAllowFile = /^[image]\w+/.test(this.file.type)

        if ( !this.hasAllowFile ) {
          this.state = 'error'
          this.$message(this, 'error', '请选择图片文件')
        }
        if ( (this.file.size/1024) > this.sizeMax ) {
          this.state = 'error'
          this.$message(this, 'erroe', `上传图片大小不超过 ${this.sizeMax/1024} M`)
        }
      },
      handlePicture(){
        let newImgDate = ''
        let reader = new FileReader()
        reader.readAsDataURL(this.file)
        reader.onload = (event) => {

          const result = event.target.result
          let image = new Image()
          image.src = result

          image.onload = () => {
            const canvas = document.createElement('canvas')

            canvas.width = this.size.width
            canvas.height = this.size.height

            let ctx = canvas.getContext('2d')
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
            this.value = canvas.toDataURL(this.file.type, 0.8)

            this.showPicture()
          }
        }
      },
      showPicture(){
          this.labelStyle.backgroundSize = '100%'
          this.labelStyle.backgroundImage = `url(${this.value})`
          this.labelStyle.backgroundRepeat = 'no-repeat'

          this.state = 'success'
          this.$emit('input', this.value)
      }
    }
  }
</script>