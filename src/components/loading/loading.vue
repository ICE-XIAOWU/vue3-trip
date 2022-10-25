<script setup>
  import useMainStore from '@/stores/modules/useMain'

  const mainStore = useMainStore()

  const handleLoadingClick = () => mainStore.isLoading = false
</script>

<template>
  <div class="loading" v-show="mainStore.isLoading" @click="handleLoadingClick">
    <div class="loading-bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .5);

    .loading-bg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 104px;
      height: 104px;
      background: url(@/assets/img/home/loading-bg.png) no-repeat 0 0 / 100% 100%;

      img {
        width: 72px;
        height: 72px;
        margin-bottom: 10px;
      }
    }
  }
</style>