<template>
    <div class="admin">
        <el-container>
            <el-header>内容管理后台系统</el-header>
                <el-container>
                    <el-aside width="180px">
                        <el-row class="tac">
                            <el-col :span="24">
                                <el-menu
                                default-active="1"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose"
                                background-color="#545c64"
                                text-color="#fff"
                                active-text-color="#ffd04b">
                                <!-- <router-link to="/admin/borad">
                                    <el-menu-item index="1">
                                        <i class="el-icon-menu"></i>
                                        <span slot="title">综述</span>
                                    </el-menu-item>
                                </router-link> -->
                                <router-link to="/admin/publish">
                                 <el-menu-item index="1">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">发布</span>
                                </el-menu-item>
                                </router-link>
                                </el-menu>
                            </el-col>
                         </el-row>
                    </el-aside>
                    <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <el-footer>Footer</el-footer>
                    </el-container>
                </el-container>
            </el-container>
    </div>    
</template>

<script>
export default {
    mounted() {
       console.info("admin",this.$store.state.oauth_token)
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
    
}
</script>
<style lang="less" scoped>
.admin{
    .el-header{
        background-color: rgba(13, 188, 121, 1);
        font-family: PingFang SC;
        color: #f5f5f5;
        font-size: 24px;
        line-height: 60px;
        padding-left: 180px; 
    }
  .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    
    .el-aside {
        background-color: #545c64;
        color: #333;
        text-align: center;
        min-height:93.7vh;
    }
    
    .el-main {
        background-color: #f5f5f5;
        color: #333;
        text-align: center;
    }
    
    body > .el-container {
        margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
}

</style>


