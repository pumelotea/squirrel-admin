<template>
  <div class="main-layout">
    <div class="head-bar">
      <slot name="head-bar"></slot>
    </div>
    <div
      class="nav-bar"
      :class="{ 'collapse-left': isCollapse, 'uncollapse-left': !isCollapse }"
    >
      <slot name="nav-bar"></slot>
    </div>
    <div
      class="menu-list"
      :class="{
        'collapse-width-menu': isCollapse,
        'uncollapse-width-menu': !isCollapse
      }"
    >
      <slot name="menu-list"></slot>
    </div>
    <div
      class="content"
      :class="{ 'collapse-left': isCollapse, 'uncollapse-left': !isCollapse }"
    >
      <slot name="content"></slot>
    </div>
    <screen-locker v-model="lockScreen" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ScreenLocker from '@/components/ScreenLocker'
import Store from '@/store'
export default {
  name: 'MainLayout',
  components: {
    ScreenLocker
  },
  computed: {
    ...mapGetters(['isCollapse']),
    lockScreen: {
      get: () => {
        return Store.getters.screenLocked
      },
      set: val => {
        Store.commit('setScreenLock', val)
      }
    }
  },
  mounted() {}
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
  top: 115px;
  padding: 5px;
  box-sizing: border-box;
}

.collapse-left {
  left: 64px;
  transition: all 0.2s ease-in-out;
}

.collapse-width-menu {
  width: 64px;
  transition: all 0.2s ease-in-out;
}

.uncollapse-left {
  left: 220px;
  transition: all 0.2s ease-in-out;
}

.uncollapse-width-menu {
  width: 220px;
  transition: all 0.2s ease-in-out;
}
</style>
