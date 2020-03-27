<template>
  <div class="head-bar">
    <div
      class="logo"
      :class="{
        'collapse-width-menu': isCollapse,
        'uncollapse-width-menu': !isCollapse,
        'brand-collapse': isCollapse
      }"
    >
      <span :class="{ brand: !isCollapse }">LT</span>
      <span v-if="!isCollapse">Admin</span>
    </div>
    <div class="actions">
      <el-link
        class="action-item"
        :underline="false"
        @click="$store.commit('toggleIsCollapse')"
      >
        <i class="el-icon-s-unfold" v-if="isCollapse"></i>
        <i class="el-icon-s-fold" v-else></i>
      </el-link>
    </div>
    <div class="space"></div>
    <div class="actions">
      <el-link class="action-item" :underline="false">
        <message-box />
      </el-link>
      <el-link class="action-item" :underline="false"
        ><i class="el-icon-picture"></i
      ></el-link>
      <el-link class="action-item" :underline="false"
        ><i class="el-icon-setting"></i
      ></el-link>
      <div class="action-item">
        <el-dropdown trigger="click">
          <span class="el-dropdown-links">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改头像</el-dropdown-item>
            <el-dropdown-item>修改信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item disabled>改绑手机</el-dropdown-item>
            <el-dropdown-item divided>退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MessageBox from './MessageBox'
export default {
  name: 'HeadBar',
  components: { MessageBox },
  computed: {
    ...mapGetters(['isCollapse'])
  }
}
</script>

<style scoped>
.head-bar {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  box-sizing: border-box;
}

.logo {
  width: 220px;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 30px;
}

.space {
  flex: 1;
}

.actions {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.action-item {
  padding: 0 10px;
  cursor: pointer;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.collapse-width-menu {
  width: 64px;
  transition: all 0.2s ease-in-out;
}

.uncollapse-width-menu {
  width: 220px;
  transition: all 0.2s ease-in-out;
}

.brand {
  color: #6fbfff;
  font-weight: bold;
}

.brand-collapse {
  color: white !important;
  background: #6fbfff;
  font-weight: bold;
}
</style>
