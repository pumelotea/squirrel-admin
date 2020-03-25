<template>
  <div class="page-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageLayout'
}
</script>

<style scoped>
.page-container {
  background: white;
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
