<template>
  <el-menu-item v-if="data.isRouter" :index="data.menuId">
    <i :class="data.icon" v-if="data.icon"></i>
    <span slot="title">{{ data.name }}</span>
  </el-menu-item>

  <el-submenu :index="data.menuId" v-else>
    <template slot="title">
      <i :class="data.icon" v-if="data.icon"></i>
      <span slot="title">{{ data.name }}</span>
    </template>
    <menu-content v-for="e in data.children" :data="e" :key="e.routerPath" />
  </el-submenu>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  name: 'MenuContent'
}
</script>

<style scoped></style>
