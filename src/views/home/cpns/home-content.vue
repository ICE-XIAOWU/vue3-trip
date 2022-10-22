<script setup>
  import { watch } from 'vue'
  import { storeToRefs } from 'pinia';
  import HouseItemV1 from '@/components/house-item-v1/house-item-v1.vue'
  import HouseItemV2 from '@/components/house-item-v2/house-item-v2.vue'
  import useHomeStore from '@/stores/modules/useHome.js';
  import useScroll from '@/hooks/useScroll.js'

  const homeStore = useHomeStore()
  const { houseList } = storeToRefs(homeStore)

  // 监听滚动
  const { isReachBottom } = useScroll()
  watch(isReachBottom, () => {
    // 请求房屋数据
    console.log('到达了底部');
    homeStore.fetchHouseListDataAction().then(() => {
      isReachBottom.value = false
    })
  })
</script>

<template>
  <div class="home-content">
    <h2 class="title">推荐精选</h2>
    <div class="content">
      <template v-for="item in houseList" :key="item.data.houseId">
        <HouseItemV1 v-if="item.discoveryContentType === 9" :item-data="item.data" />
        <HouseItemV2 v-if="item.discoveryContentType === 3" :item-data="item.data" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .home-content {
    margin-top: 10px;
    padding: 0 10px;

    .title {
      padding-left: 20px;
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>