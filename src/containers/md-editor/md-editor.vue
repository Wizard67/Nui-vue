<template>
  <div class="editor">
    <ul class="flex-start">
      <button class="icon" type="button" title="加粗"
              @click="addStrong"><i class="fa fa-bold"></i></button>

      <button class="icon" type="button" title="斜体"
              @click="addItalic"><i class="fa fa-italic"></i></button>

      <button class="icon" type="button" title="标题"
              ><i class="fa fa-header"></i></button>

      <button class="icon" type="button" title="删除"
              ><i class="fa fa-strikethrough"></i></button>

      <button class="icon" type="button" title="无序列表"
              ><i class="fa fa-list-ul"></i></button>

      <button class="icon" type="button" title="有序列表"
              ><i class="fa fa-list-ol"></i></button>

      <button class="icon" type="button" title="链接"
              ><i class="fa fa-link"></i></button>

      <button class="icon" type="button" title="图片"
              ><i class="fa fa-image"></i></button>

      <button class="icon" type="button" title="引用"
              ><i class="fa fa-quote-left"></i></button>

      <button class="icon" type="button" title="预览"
              ><i class="fa fa-eye"></i></button>
    </ul>
    <hr>
    <textarea spellcheck="false" placeholder="仅为测试,支持 markdown 语法" 
              ref="editor"
              v-model="value"
              v-debounceInput="input">
    </textarea>
    <div class="editor-view">

    </div>
  </div>
</template>

<script>
  import marked from '@/plugins/marked/marked'

  export default {
    name: 'Editor',
    data(){
      return {
        value: '',
        htmlData: '',
        editor: null
      }
    },
    mounted() {
      // 缓存节点
      this.saveDom()
    },
    computed:{
    },
    methods: {
      input(e){
        this.__transform(e.target.value)
      },
      saveDom(){
        this.editor = this.$refs.editor

        // console.log(this.editor)
      },
      __transform(text){
        if (text) {
          // this.htmlData = marked(text)
          this.htmlData = text
        }else{
          let m = this.editor.value
          this.value = m
          // this.htmlData = marked(m)
          this.htmlData = m
        }
        this.$emit('input',this.htmlData)
      },
      // https://gist.github.com/mollwe/4030803
      __selectText(){
        let e = this.editor

        return (
          /* mozilla / dom 3.0 */
          ('selectionStart' in e && function () {
              let l = e.selectionEnd - e.selectionStart
              return { start: e.selectionStart, end: e.selectionEnd, length: l, text: e.value.substr(e.selectionStart, l) }
          }) ||
          /* exploder */
          (document.selection && function () {
            //e.focus()
            let r = document.selection.createRange()
            if (r == null) {
                return { start: 0, end: e.value.length, length: 0 }
            }
            let re = e.createTextRange()
            let rc = re.duplicate()
            re.moveToBookmark(r.getBookmark())
            rc.setEndPoint('EndToStart', re)
            return { start: rc.text.length, end: rc.text.length + r.text.length, length: r.text.length, text: r.text }
          }) ||
          /* browser not supported */
          function () {
            return null
          }
        )()
      },
      // https://gist.github.com/mollwe/4030803
      __replaceText(text){
        let e = this.editor
        // console.log(e.)
        return (
          /* mozilla / dom 3.0 */
          ('selectionStart' in e && function () {
              e.value = e.value.substr(0, e.selectionStart) + text + e.value.substr(e.selectionEnd, e.value.length)
          }) ||
          /* exploder */
          (document.selection && function () {
              e.focus()
              document.selection.createRange().text = text
          }) ||
          /* browser not supported */
          function () {
            e.value += text
          }
        )()
      },
      addStrong(){
        let select = this.__selectText()
        this.__replaceText('** nihao **')
        this.__transform()
      },
      addItalic(){
      }
    }
  }
</script>