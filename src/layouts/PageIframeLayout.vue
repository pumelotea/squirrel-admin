<template>
  <div class="page-container">
    <div class="title" v-if="!noTitle">{{ activeRoute.name }}</div>
    <div class="breadcrumb" v-if="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <template v-for="e in activeRoute.breadcrumb">
          <el-breadcrumb-item v-if="e.isRouter" :to="{ path: e.routerPath }">{{
            e.name
          }}</el-breadcrumb-item>
          <el-breadcrumb-item v-else>{{ e.name }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="content">
      <iframe
        class="main-iframe"
        frameborder="0"
        src="https://www.squirrelzoo.com"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIframeLayout',
  props: {
    noTitle: {
      type: Boolean,
      default: true
    },
    breadcrumb: {
      type: Boolean,
      default: false
    }
  },
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
  display: flex;
  flex-direction: column;
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
  /*margin-top: 15px;*/
  flex: 1;
}

.main-iframe {
  width: 100%;
  height: 100%;
}
</style>
