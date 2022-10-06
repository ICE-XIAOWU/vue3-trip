<!-- 使用vant -->
<script setup>
  import tabBarData from '@/assets/local-data/tab-bar';
  import { getAssestImg } from '@/utils/getAssest';
  import { ref } from 'vue';

  const currentActive = ref(0);
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentActive" active-color="#ff9854" route>
      <template v-for="(item, index) in tabBarData">
        <van-tabbar-item icon="home-o" :to="item.path">
          <span>{{item.text}}</span>
          <template #icon>
            <img v-if="index === currentActive" :src="getAssestImg(item.activeImg)" alt="">
            <img v-else :src="getAssestImg(item.img)" alt="">
          </template>
        </van-tabbar-item>
      </template>      
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    border-top: 1px solid #f3f3f3;
  }
</style>