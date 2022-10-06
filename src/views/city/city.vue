<script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import useCityStore from '@/stores/modules/useCity'
  import { storeToRefs } from 'pinia';

  
  const router = useRouter()
  // 搜索
  const searchValue = ref('')
  const handleSearchCancelClick = () => {
    router.back()
  }
  // tab栏
  const currentTabActive = ref('')
  const cityStore = useCityStore()
  cityStore.fetchCityAllDataAction()
  const { allCities } = storeToRefs(cityStore)
  const currentCityGroup = computed(() => allCities.value[currentTabActive.value])

</script>

<template>
  <div class="city">

    <div class="top">
      <!-- 搜索框 -->
      <van-search
        v-model="searchValue"
        show-action
        placeholder="城市/区域/位置"
        shape="round"
        @cancel="handleSearchCancelClick"
      />
      <!-- tab栏 -->
      <van-tabs v-model:active="currentTabActive" color="#ff9854">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div v-for="item in currentCityGroup?.cities">
        {{item}}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .city {
    
    .content {
      height: calc(100vh - 98px);
      overflow-y: auto;
      background-clip: #f9f9f9;
    }
  }
</style>