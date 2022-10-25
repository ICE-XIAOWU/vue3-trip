<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia'
  import useCityStore from '@/stores/modules/useCity';
  import useHomeStore from '@/stores/modules/useHome'
  import useMainStore from '@/stores/modules/useMain'
  import { formatMonthDay, getDiffDay } from '@/utils/formatDate'
import { computed } from '@vue/reactivity';

  // router
  const router = useRouter()

  // 位置
  const cityStore = useCityStore()
  const { currentCity } = storeToRefs(cityStore)
  const handleCityClick = () => {
    router.push('/city');
  }
  const handleMyPositionClick = () => {
    navigator.geolocation.getCurrentPosition(
      res => {
        console.log('获取位置成功：', res)
      }, 
      err => console.log('获取位置失败：', err))
  }

  // 日期
  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)
  const calendarShow = ref(false)
  // startDate 格式化后的入住日期 endDate 格式化后的离店日期 stayCount 停留天数
  const startDateStr = computed(() => formatMonthDay(startDate.value))
  const endDateStr = computed(() => formatMonthDay(endDate.value))
  const stayCount = computed(() => getDiffDay(startDate.value, endDate.value))

  // 点击日期时的处理
  const handleDateClick = () => {
    calendarShow.value = true
  }
  // 选择日期后的处理
  const handleSelectDateClick = ([selectStartDate, selectEndDate]) => {
    mainStore.startDate = selectStartDate
    mainStore.endDate = selectEndDate
    stayCount.value = getDiffDay(selectStartDate, selectEndDate)
    calendarShow.value = false
  }

  // 热门建议
  const homeStore = useHomeStore()

  // 搜索按钮
  const handleSearchBtnClick = () => {
    router.push({
      path: '/search',
      query: {
        startDate: startDate.value,
        endDate: endDate.value,
        currentCityName: currentCity.value.cityName
      }
    })
  }
  
</script>

<template>
  <div class="search-box">
    <!-- 位置 -->
    <div class="location boder-bottom-line">
      <div class="city" @click="handleCityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="handleMyPositionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期选择 -->
    <div class="date-range search-item boder-bottom-line" @click="handleDateClick">
      <div class="start">
        <div class="text">入住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="stay">共 {{ stayCount }} 晚</div>
      <div class="end">
        <div class="text">离店</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <van-calendar v-model:show="calendarShow" type="range" @confirm="handleSelectDateClick" color="#ff9854" :round="false" />

    <!-- 价格与人数 -->
    <div class="price-people search-item boder-bottom-line">
      <div>价格不限</div>
      <div>人数不限</div>
    </div>

    <!-- 关键字/位置/民宿名 -->
    <div class="keyword search-item boder-bottom-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="hot-suggest search-item">
      <template v-for="item in homeStore.hotSuggests">
        <div class="suggest-item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">{{ item.tagText.text }}</div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="search-btn search-item">
      <div class="btn" @click="handleSearchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .search-box {
    --van-calendar-popup-height: 100%;

    .location {
      display: flex;
      align-items: center;
      height: 44px;
      padding: 0 20px;

      .city {
        flex: 1;
        font-size: 15px;
      }

      .position {
        display: flex;
        align-items: center;
        width: 75px;
        
        .text {
          margin-right: 5px;
          color: #666 ;
          font-size: 12px;
        }

        img {
          width: 18px;
        }
      }
    }
    .search-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 44px;
      padding: 0 20px;
      padding-right: 20%;
    }

    .date-range {
      .start, .end {
        .text {
          font-size: 12px;
          color: var(--primary-text1-color);
          margin-bottom: 3px;
        }
      }

      .stay {
        height: 44px;
        line-height: 44px;
        padding-right: 10px;
        font-size: 12px;
        color: var(--primary-text1-color);
        border-right: 1px solid var(--border-bottom-gary-color);
      }
    }

    .price-people {
      color: var(--primary-text1-color);
    }

    .keyword {
      color: var(--primary-text1-color);
    }

    .hot-suggest {
      flex-wrap: wrap;
      justify-content: start;
      height: auto;
      padding: 5px 20px;

      .suggest-item {
        padding: 3px 8px;
        margin: 5px;
        font-size: 12px;
        line-height: 1;
        border-radius: 10px;
      }
    }

    .search-btn {
      padding-right: 20px;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 38px;
        font-size: 18px;
        font-weight: 500;
        border-radius: 20px;
        color: #fff;
        background-image: var(--theme-linear-gradient);
      }
    }

    .boder-bottom-line {
      border-bottom: 1px solid var(--border-bottom-gary-color);
    }
    
  }
</style>