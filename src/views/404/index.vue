<template>
  <div class="container">
    <div class="content">
      <div class="picture">
        <img style="margin: auto" src="images/404.svg" draggable="false" />
      </div>
      <div class="text">
        404
      </div>
      <div style="text-align: center">
        <el-link :underline="false" disabled>页面走丢了</el-link>
        <el-link @click="$router.push('/')">返回首页</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #f3f3f3;
  display: flex;
}

.content {
  width: 50%;
  margin: auto;
}

.picture {
  display: flex;
}

.text {
  font-size: 100px;
  text-align: center;
  color: #bec8d1;
}
</style>
