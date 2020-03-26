<template>
  <div class="page-container">
    <div class="title">{{ activeRoute.name }}</div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <template v-for="e in activeRoute.breadcrumb">
          <el-breadcrumb-item v-if="e.isRouter" :to="{ path: e.routerPath }">{{
            e.name
          }}</el-breadcrumb-item>
          <el-breadcrumb-item v-else>{{ e.name }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="alerts">
      <slot name="alerts"></slot>
    </div>
    <div class="actions">
      <slot name="actions">
      </slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageLayout',
  computed: {
    ...mapGetters(['activeRoute'])
  }
}
</script>

<style scoped>
.page-container {
  background: white;
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
}

.title {
  font-size: 24px;
}

.breadcrumb {
  margin-top: 10px;
}

.alerts{
  margin-top: 10px;
}

.actions {
  margin-top: 10px;
}

.content {
  margin-top: 10px;
}
</style>
