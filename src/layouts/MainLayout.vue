<template>
  <div class="main-layout">
    <div class="head-bar">
      <slot name="head-bar"></slot>
    </div>
    <div class="nav-bar">
      <slot name="nav-bar"></slot>
    </div>
    <div class="menu-list">
      <slot name="menu-list"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style scoped>
.main-layout {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #f0f2f5;
}

.nav-bar {
  left: 220px;
  top: 60px;
  right: 0;
  height: 50px;
  position: absolute;
  background: white;
  padding-top: 4px;
}

.head-bar {
  left: 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 60px;
  background: white;
}

.menu-list {
  position: absolute;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 220px;
  background: white;
}

.content {
  position: absolute;
  left: 220px;
  right: 0;
  bottom: 0;
  top: 110px;
  padding: 5px;
}
</style>
