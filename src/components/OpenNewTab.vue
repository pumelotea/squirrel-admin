<template>
  <el-tooltip class="item" effect="dark" placement="bottom">
    <template #content>
      <div class="link" @click="open">在浏览器新标签页打开</div>
    </template>
    <slot></slot>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    link: {
      type: String
    }
  },
  name: 'OpenNewTab',
  methods:{
    open(){
      const location = window.location
      const mode = this.$router.mode
      if(mode === 'hash'){
        window.open(`${location.protocol}//${location.host}${location.pathname}#${this.link}`,'blank')
      }

      if(mode === 'history'){
        window.open(`${location.protocol}//${location.host}${location.pathname}${this.link}`,'blank')
      }
    }
  }
}
</script>

<style scoped>
.link {
  cursor: pointer;
}

.link:hover {
  color: #d1d1d1;
}
</style>
