<script setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import useCityStore from '@/stores/modules/useCity';

  // store and router
  const router = useRouter()
  const cityStore = useCityStore()
  
  // props
  const props = defineProps({
    groupData: {
      type: Object,
      default: () => ({})
    }
  })

  // 自定义索引栏
  const indexList = computed(() => {
    const list = props.groupData.cities.map(item => item.group)
    list.unshift('#')
    return list
  })

  // 选择城市
  const handleSelectCityClick = (city) => {
    cityStore.currentCity = city
    router.back()
  }
</script>

<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList" highlight-color="#ff9854" :sticky="false">
      <van-index-anchor index="热门" />
      <div class="hot-tip">
        <div class="tip" v-for="item in groupData.hotCities" @click="handleSelectCityClick(item)">{{ item.cityName }}</div>
      </div>
      <template v-for="item in groupData.cities">
        <van-index-anchor :index="item.group" />
        <template v-for="city in item.cities">
          <van-cell :title="city.cityName" @click="handleSelectCityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
  .city-group {

    .hot-tip {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 10px;
      padding-right: 25px;

      .tip {
        padding: 5px 20px;
        margin: 6px;
        font-size: 12px;
        line-height: 1;
        text-align: center;
        border-radius: 15px;
        background-color: #fff4ec;
        // text-decoration: ;
      }
    }
  }
</style>