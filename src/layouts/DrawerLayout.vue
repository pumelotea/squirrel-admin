<template>
  <el-drawer
    custom-class="drawer-layout"
    :size="size"
    :append-to-body="true"
    :visible.sync="isVisible"
    :direction="'rtl'"
    :show-close="false"
    @closed="closed"
  >
    <template #title>
      <div class="title-container">
        <div class="title">
          {{ title }}
        </div>
        <div>
          <el-link :underline="false" @click="closed">
            <i class="el-icon-close" style="font-size: 20px"></i>
          </el-link>
        </div>
      </div>
    </template>
    <div class="drawer-container">
      <div class="drawer-body">
        <slot></slot>
      </div>
      <div class="drawer-foot">
        <slot name="actions"></slot>
      </div>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: 'DrawerLayout',
  props: {
    value: {
      type: Boolean
    },
    title: {
      type: String,
      default: '标题'
    },
    size: {
      type: String,
      default: '500px'
    }
  },
  watch: {
    value() {
      this.isVisible = this.value
    }
  },
  methods: {
    closed() {
      this.isVisible = false
      this.$emit('input', false)
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    this.isVisible = this.value
  }
}
</script>

<style>
.drawer-layout {
  outline: none !important;
}

 .drawer-layout #el-drawer__title{
   margin: 0;
   padding: 20px;
   border-bottom: 1px solid rgba(94, 94, 94, 0.2);
   z-index: 1;
  }
</style>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
}

.title {
  font-size: 18px;
  flex: 1;
}
.drawer-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  top: 65px;
}

.drawer-body {
  flex: 1;
  overflow: auto;
}

.drawer-foot {
  padding: 10px 20px;
  box-sizing: border-box;
  border-top: 1px solid rgba(94, 94, 94, 0.2);
}
</style>
