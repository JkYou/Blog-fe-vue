<template>
<el-row :gutter="20">
  <el-col>
      <el-table
      :data="tableData"
      stripe
      border style="width: 1232px;">
      <el-table-column
        prop="created"
        label="日期"
        width="210">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="400">
      </el-table-column>
      <el-table-column
        prop="categories"
        label="类别"
        width="210">
      </el-table-column>
      <el-table-column
        prop="modified"
        label="最后修改时间"
        width="210">
      </el-table-column>
      <el-table-column
        label="操作"
        width="200">
       <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
  </el-col>
</el-row>
  
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          created:"2018-07-09",
          title:"钢铁是怎么炼成的",
          categories:"js",
          modified:"2018-07-12"
        }],
        start:0,
        end:5
      }
    },
    created() {
      this.getList()
      
    }, 
    methods: {
      handleEdit(index,row) {
        console.log(row);
      },
      handleDelete(index,row) {
        this.$confirm("是否要删除","提示",{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(()=>{
          console.info('取消删除')
        })
        console.info(row);
      },
      getList(start,end){
         this.axios({
              method:"post",
              url:'/getList',
              params:{
                  start:this.start,
                  end:this.end
              }
          }).then(res => {
              console.info(res.data.data);
              this.tableData=res.data.data.list;
          }).catch(e => {
              console.info(e);
          })

      }
    }   
  }
</script>
<style lang="less" scoped>
</style>

