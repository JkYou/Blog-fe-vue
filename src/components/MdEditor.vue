<template>
<div class="editor">
  <textarea :value="input" @input="update">
  </textarea>
  <div v-html="compiledMarkdown" v-show="open" v-highlight></div>
</div>
  
</template>

<script>
import marked from 'marked'
import { debounce } from "@/assets/utils";
export default {
  props:{
    open:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      input: '# 开始',
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: debounce(function (e) {
      this.input = e.target.value;
      this.$store.dispatch("SET_ARTCONTENT",{
               art_content:this.input
             });
    }, 300)
  }
}
</script>
<style lang="less" scoped>
.editor{
   margin: 30px auto 0;
   height: 100%;
   font-family: 'Helvetica Neue', Arial, sans-serif;
   color: #333;
   display: flex;
    textarea {
      flex: 1;
      border: none;
      resize: none;
      outline: none;
      background-color: #fff;
      font-size: 14px;
      font-family: 'Monaco', courier, monospace;
      padding: 20px;
      height: 350px;
      overflow: hidden;
      box-shadow: 2px 3px 5px #D3D3D3;
    }
    div{
      flex: 1;
      display: inline-block;
      width: 49%;
      height: 100%;
      vertical-align: top;
      box-sizing: border-box;
       border-left: 1px solid #ccc;
      padding: 20px;
      h1,h2,h3,h4,h5{
        margin: 10px 0;
      }
    }
    
}
</style>

