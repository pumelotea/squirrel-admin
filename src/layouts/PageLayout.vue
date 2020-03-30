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
      <slot name="actions"> </slot>
    </div>

    <div class="content">
      <slot></slot>
    </div>
    <div class="pagination">
      <slot name="pagination"></slot>
    </div>

    <el-backtop target=".page-container"></el-backtop>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import permissionBtnMixin from '@/mixin/permission-btn'
export default {
  name: 'PageLayout',
  mixins: [permissionBtnMixin],
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
  margin-top: 15px;
}

.alerts {
  margin-top: 15px;
}

.actions {
  margin-top: 15px;
}

.content {
  margin-top: 15px;
}

.pagination {
  text-align: center;
  padding: 15px;
}
</style>
