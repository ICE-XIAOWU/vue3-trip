<script setup>
import useHomeStore from '@/stores/modules/useHome.js'
const homeStore = useHomeStore()

</script>

<template>
  <div class="home-categories">
    <div class="item" v-for="item in homeStore.categories" :key="item.id">
      <img :src="item.pictureUrl" alt="">
      <div class="text">{{ item.title }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .home-categories {
    display: flex;
    margin-top: 8px;
    padding: 0 10px;
    overflow-x: auto;
    background-color: #fff;

    &::-webkit-scrollbar {
      width: 0 !important;
    }

    .item {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80px;
      font-size: 12px;
      img {
        width: 32px;
        height: 32px;
      }
      
    }
  }
</style>