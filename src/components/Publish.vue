//文章发布页面
<template>
    <div class="publish">
        <el-row :gutter="20">
            <el-col :span="24"><h2 class="tip">文章发布</h2></el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="inp">
                   <el-input v-model="title" placeholder="请输入文章标题" style="inp"></el-input>
                </div>
            </el-col>
            <el-col :span="12">
                <el-select v-model="artValue" placeholder="请选择分类">
                    <el-option
                    v-for="item in artOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row style="margin:30px 0; text-align:left;">
            <h3 style="margin-bottom:20px;">请选择文章标签</h3>
            <el-col :span="24">
                <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{tag}}
                    </el-tag>
                    <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新标签</el-button>
            </el-col>
        </el-row>
        <el-row style="text-align:left; margin-bottom:50px;">
            <h3 style="margin-bottom:20px;">内容:</h3>
            <el-col :span="24">
                    <SEditor></SEditor>
            </el-col>
        </el-row>
        <el-row>
            <el-button type="primary" @click.stop="submit">发布</el-button>
        </el-row>
    </div>
</template>
<script>
import SEditor from '$com/Editor'
export default {
    name:"publish",
    data(){
        return{
            title:"",
            artValue:null,
            artOptions:[{label:"js",value:"js"},{label:"css",value:"css"},{label:"工具使用",value:"工具使用"},{label:"心情",value:"心情"},{label:"计划",value:"计划"},{label:"vue",value:"vue"},{label:"webpack",value:"webpack"}],
            dynamicTags: [],
            inputVisible: false,
            inputValue: '',
        }
    },
    components:{
         SEditor
    },
    mounted() {
    },
    methods:{
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
            this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        },
        submit(e) {
            if(!this.title){
                this.$message.error("标题不能为空");
                return ;
            } 
             if(!this.$store.state.art_content.art_content){
                this.$message.error("内容不能为空");
                return ;
            } 
             if(!this.dynamicTags.toString()){
                this.$message.error("标签不能为空");
                return ;
            } 
             if(!this.artValue){
                this.$message.error("类别不能为空");
                return ;
            }  
            this.axios({
                method: 'post',
                url: '/insetArt',
                params:{
                    title:this.title,
                    content:this.$store.state.art_content.art_content,
                    tags:this.dynamicTags.toString(),
                    categories:this.artValue,
                    auth_id:"1",
                    status:"publish"
                }
            }).then(res => {
                if(res.data.data.sts===1){
                    this.$message({
                            message: '发布成功',
                            type: 'success'
                    });
                }else{
                   this.$message.error(res.data.data.back); 
                }
            })
        }
    }
    
}
</script>
<style lang="less" scoped>
.publish{
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    max-width: 700px;
    color: #606266;
    .tip{
        text-align: left;
        margin-bottom: 50px;
    }
    .inp{
        width: 300px;
        text-align: center;
        margin:  0 auto;
    }
     .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
}

</style>


