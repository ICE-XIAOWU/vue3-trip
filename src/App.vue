<script setup>
  import { useRoute } from 'vue-router';
  import TabBar from './components/tab-bar/tab-bar.vue';
  import Loading from '@/components/loading/loading.vue'

  const route = useRoute()
</script>

<template>
  <div class="App">
    <router-view></router-view>
    <TabBar v-show="!route.meta.hiddenTab" />
    <Loading />
  </div>
</template>

<style scoped>
</style>
