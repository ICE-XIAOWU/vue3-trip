<!-- 手写版本 -->
<script setup>
  import tabBarData from '@/assets/local-data/tab-bar';
  import { getAssestImg } from '@/utils/getAssest';
  import { ref } from 'vue';
import { useRouter } from 'vue-router';

  const router = useRouter();
  const currentActive = ref(0);
  const handleTabbarClick = (index, item) => {
    currentActive.value = index;
    router.push(item.path);
  }
</script>

<template>
  <div class="tab-bar">
    <template v-for="item, index in tabBarData">
      <div class="tab-bar-item" :class="{active: currentActive === index}" @click="handleTabbarClick(index, item)">
        <img v-if="currentActive === index" :src="getAssestImg(item.activeImg)" alt="底部栏图标">
        <img v-else :src="getAssestImg(item.img)" alt="底部栏图标">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
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

    .tab-bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      &.active {
        color: var(--primary-color);
      }

      img {
        width: 36px;
      }

      .text {
        font-size: 12px;
      }
    }
  }
</style>