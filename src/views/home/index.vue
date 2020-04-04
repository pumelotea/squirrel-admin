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
      <content-container ref="cache">
        <keep-alive>
          <router-view v-if="isKeepalive" :menuId="menuId" />
        </keep-alive>
        <router-view v-if="!isKeepalive" :menuId="menuId" />
      </content-container>
    </template>
  </MainLayout>
</template>

<script>
import HeadBar from '@/components/HeadBar'
import NavBar from '@/components/NavBar'
import MainLayout from '@/layouts/MainLayout'
import MenuList from '@/components/MenuList'
import ContentContainer from '@/layouts/ContentContainer'
export default {
  components: {
    MainLayout,
    HeadBar,
    NavBar,
    MenuList,
    ContentContainer
  },
  computed: {
    isKeepalive() {
      return this.$route.meta.isKeepalive || false
    },
    menuId() {
      return this.$route.meta.menuId || ''
    },
    cache() {
      return this.$refs.cache.$vnode.componentOptions.children[0]
        .componentInstance.cache
    }
  },
  methods: {
    test() {
      console.log(this.cache)
    }
  },
  mounted() {
    this.$bus.$on('removeTab', menuId => {
      let key = Object.keys(this.cache).find(key => {
        return this.cache[key].componentInstance.$attrs['menuId'] === menuId
      })
      delete this.cache[key]
    })
  }
}
</script>
