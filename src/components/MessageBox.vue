<template>
  <el-popover
    placement="top-start"
    width="300"
    title="消息列表"
    trigger="hover"
  >
    <el-badge :value="99" class="item" slot="reference">
      <i class="el-icon-chat-dot-square" ></i>
    </el-badge>

    <div style="max-height: 400px;overflow: auto">
      <el-card shadow="never" v-for="e in 20">
        从不显示
      </el-card>
    </div>
    <div class="more">
      <el-link :underline="false">
        <i class="el-icon-more"></i>
      </el-link>
    </div>
  </el-popover>
</template>

<script>
  export default {
    name: "MessageBox"
  }
</script>

<style scoped>
  .more {
    position: absolute;
    right: 20px;
    top: 10px;
  }
</style>
