<template>
  <page-iframe-layout :url="url"></page-iframe-layout>
</template>

<script>
export default {
  name: 'index',
  computed:{
    url(){
      return this.$route.query.url
    }
  }
}
</script>

<style scoped></style>
