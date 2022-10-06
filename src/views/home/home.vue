<script setup>
  import HomeNavBar from './cpns/home-nav-bar.vue';
  import HomeSearchBox from './cpns/home-search-box.vue';
  
</script>

<template>
  <div class="home">
    <!-- 导航栏 -->
    <HomeNavBar />
    <!-- banner -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <!-- 搜索 -->
    <HomeSearchBox />
  </div>
</template>

<style lang="less" scoped>
  .home {
    .banner {
      img {
        width: 100%;
      }
    }
  }
</style>