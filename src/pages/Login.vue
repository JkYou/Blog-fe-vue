<template>
    <div class="login">
        <div class="title"></div>
        <div class="form">
            <h2>内容管理系统</h2>
            <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm"  class="rule">
                <el-form-item prop="user" class="item">
                    <el-input v-model="ruleForm.user" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item prop="pass"  class="item">
                    <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item  class="item">
                    <el-button type="primary" @click="submitForm('ruleForm')" style="width:300px">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      var validateUser = (rule, value, callback) => {
        if (value==='') {
          return callback(new Error('账号不能为空'));
        }else{
            callback();
        }        
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
         var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/)
            if(reg.test(value)){
            callback();
            }else{
                    return callback(new Error("密码格式不正确！"))
            }
        }
      };
      return {
        ruleForm: {
            user:'',
            pass: ''
        },
        rules2: {
          user: [
                { validator: validateUser, trigger: 'blur' }
            ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             this.$store.dispatch("SET_OAUTHTOKEN",{
               oauth_token:true
             });
             let redirect = decodeURIComponent(this.$route.query.redirect || '/');
              this.$router.push({path: redirect});
          } else {
             this.$message.error('您输入的格式有误，请重新输入！');
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="less" scoped>
// searchPage
.login{
  background: url(../assets/images/1.jpg) center 100% no-repeat;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-size: cover;
  .title{
    width: 600px;
    height: 200px;
    background: url(../assets/images/wuwei.png) center no-repeat;
    background-size: 100%;  
    margin: 80px auto 0;
  }
  .form{
      margin: 30px auto;
      border-radius: 20px;
      max-width: 400px;
      height: 300px;
      background: rgba(0, 0, 0, .5);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #f5f5f5;
      h2{
          font-size: 30px;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 700;
          margin-bottom: 30px;
      }
  }
}
</style>


