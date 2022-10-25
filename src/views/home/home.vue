<script setup>
  import { computed } from 'vue'
  import HomeNavBar from './cpns/home-nav-bar.vue';
  import HomeSearchBox from './cpns/home-search-box.vue';
  import HomeCategories from './cpns/home-categories.vue'
  import HomeContent from './cpns/home-content.vue'
  import SearchBar from '@/components/search-bar/search-bar.vue'
  import useScroll from '@/hooks/useScroll.js'
  
  import useHomeStore from '@/stores/modules/useHome';

  // 发送网络请求
  const homeStore = useHomeStore()
  homeStore.fetchSuggestDataAction()
  homeStore.fetchCategoriesDataAction()
  homeStore.fetchHouseListDataAction()

  // 顶部搜索栏
  const { scrollTop } = useScroll()
  const isShowSearchBar = computed(() => scrollTop.value > 500)
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

    <!-- 分类 -->
    <HomeCategories />

    <!-- 房屋列表 -->
    <HomeContent />

    <!-- 顶部搜索栏 -->
    <Transition>
      <SearchBar v-show="isShowSearchBar" />
    </Transition>

  </div>
</template>

<style lang="less" scoped>
  .home {
    padding-bottom: 50px;
    .banner {
      img {
        width: 100%;
      }
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>