<script setup>
  // modules
  import { computed } from 'vue';
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia';

  // hooks and store
  import useDetailStore from '@/stores/modules/useDetail'

  // components
  import NavBar from '@/components/nav-bar/nav-bar.vue'
  import DetailSwipe from './cpns/detail-swipe.vue'
  import DetailInfos from './cpns/detail-infos.vue'
  import DetailFacility from './cpns/detail-facility.vue';
  import DetailLandlor from './cpns/detail-landlor.vue';

  const route = useRoute()
  const detailStore = useDetailStore()
  detailStore.fetchHouseDetailDataAction(route.params.id)

  // 解构mainStore的数据
  const { mainPart } = storeToRefs(detailStore)
  const housePics = computed(() => mainPart.value?.topModule?.housePicture?.housePics)
  const houseInfos = computed(() => mainPart.value?.topModule)
  const facilityData = computed(() => mainPart.value?.dynamicModule?.facilityModule)
  const landlorData = computed(() => mainPart.value?.dynamicModule?.landlordModule)
</script>

<template>
  <div class="detail" v-if="mainPart">
    <NavBar title="详情页" left-text="旅途" />
    <DetailSwipe :housePics="housePics" />

    <div class="main">
      <DetailInfos :houseInfos="houseInfos" />
      <DetailFacility v-if="facilityData" :facilityData="facilityData" />
      <DetailLandlor v-if="landlorData" :landlorData="landlorData" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .detail {
    height: 100vh;
    overflow-y: auto;
    background-color: #fff;
  }
</style>