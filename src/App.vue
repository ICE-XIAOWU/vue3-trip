<script setup>
  import { useRoute } from 'vue-router';
  import TabBar from './components/tab-bar/tab-bar.vue';

  const route = useRoute()
</script>

<template>
  <div class="App">
    <router-view></router-view>
    <tab-bar v-show="!route.meta.hiddenTab"></tab-bar>
  </div>
</template>

<style scoped>
</style>
