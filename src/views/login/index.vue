<template>
  <div class="login-container">
    <div class="login-form">
      <div class="login-pic">
        <img src="images/login_pic.png" />
      </div>
      <div class="login-actions">
        <div class="login-form-content">
          <div class="login-title">LTAdmin</div>
          <div class="login-form-item"><el-input prefix-icon="el-icon-user" placeholder="用户名" clearable/></div>
          <div class="login-form-item"><el-input prefix-icon="el-icon-lock" placeholder="密码" type="password" clearable/></div>
          <div class="login-form-item">
            <div style="display: flex">
              <div style="flex: 1;margin-right: 5px">
                <el-input prefix-icon="el-icon-key" placeholder="验证码" clearable/>
              </div>
              <div>
                <img style="height: 40px;width: 100px" src="images/code.png"/>
              </div>
            </div>
          </div>
          <div class="login-form-item">
            <el-checkbox>记住登录状态</el-checkbox>
          </div>
          <div class="login-form-item">
            <el-button style="width: 100%" plain type="primary" @click="login">登录</el-button>
          </div>
          <div class="login-form-item">
            <el-link :underline="false" style="margin-right: 5px">忘记密码</el-link>
            <el-link :underline="false">没有账号</el-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    login(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.login-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: url('../../../public/images/login_bg.png');
  background-size: cover;
  display: flex;
}

.login-form {
  width: 800px;
  height: 400px;
  background: white;
  margin: auto;
  display: flex;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 5px 20px 7px rgba(0, 0, 0, 0.1);
}

.login-pic {
  width: 45%;
  display: flex;
  position: relative;
}

.login-pic img {
  margin: auto;
  width: 100%;
}

.login-actions {
  width: 55%;
  display: flex;
}

  .login-form-content{
    margin: auto;
    width: 60%;
  }

  .login-title{
    font-size: 24px;
    color: #5e5e5e;
    margin-bottom: 30px;
  }

  .login-form-item{
    margin-top: 10px;
  }
</style>
