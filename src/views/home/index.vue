<template>
  <MainLayout>
    <template v-slot:head-bar>
      <HeadBar />
    </template>
    <template v-slot:nav-bar>
      <NavBar />
    </template>
    <template v-slot:menu-list>
      <MenuList />
    </template>
    <template v-slot:content>
      <keep-alive>
        <router-view v-if="isKeepalive" />
      </keep-alive>
      <router-view v-if="!isKeepalive" />
    </template>
  </MainLayout>
</template>

<script>
import HeadBar from '@/components/HeadBar'
import NavBar from '@/components/NavBar'
import MainLayout from '@/layouts/MainLayout'
import MenuList from '@/components/MenuList'
export default {
  components: {
    MainLayout,
    HeadBar,
    NavBar,
    MenuList
  },
  computed: {
    isKeepalive() {
      return this.$route.meta.isKeepalive || false
    }
  },
  mounted() {
  }
}
</script>
