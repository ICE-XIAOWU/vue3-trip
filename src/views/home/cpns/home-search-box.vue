<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useCityStore from '@/stores/modules/useCity';
  import useHomeStore from '@/stores/modules/useHome'
  import { formatMonthDay, getDiffDay } from '@/utils/formatDate'

  // router
  const router = useRouter()

  // 位置
  const cityStore = useCityStore()
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
  const calendarShow = ref(false)
  // today 初始化入住日期 tomorrow 初始化离店日期 startDate 格式化后的入住日期 endDate 格式化后的离店日期 stayCount 停留天数
  const today = new Date()
  const tomorrow = new Date().setDate(today.getDate() + 1)
  const startDate = ref(formatMonthDay(today))
  const endDate = ref(formatMonthDay(tomorrow))
  const stayCount = ref(getDiffDay(today, tomorrow))

  // 点击日期时的处理
  const handleDateClick = () => {
    calendarShow.value = true
  }
  // 选择日期后的处理
  const handleSelectDateClick = ([selectStartDate, selectEndDate]) => {
    startDate.value = formatMonthDay(selectStartDate)
    endDate.value = formatMonthDay(selectEndDate)
    stayCount.value = getDiffDay(selectStartDate, selectEndDate)
    calendarShow.value = false
  }

  // 热门建议
  const homeStore = useHomeStore()
  homeStore.fetchSuggestDataAction()

  
</script>

<template>
  <div class="search-box">
    <!-- 位置 -->
    <div class="location boder-bottom-line">
      <div class="city" @click="handleCityClick">{{ cityStore.currentCity.cityName }}</div>
      <div class="position" @click="handleMyPositionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期选择 -->
    <div class="date-range search-item boder-bottom-line" @click="handleDateClick">
      <div class="start">
        <div class="text">入住</div>
        <div class="date">{{ startDate }}</div>
      </div>
      <div class="stay">共 {{ stayCount }} 晚</div>
      <div class="end">
        <div class="text">离店</div>
        <div class="date">{{ endDate }}</div>
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
      padding: 5px 20px;

      .suggest-item {
        padding: 3px 8px;
        margin: 5px;
        font-size: 12px;
        line-height: 1;
        border-radius: 10px;
      }
    }

    .boder-bottom-line {
      border-bottom: 1px solid var(--border-bottom-gary-color);
    }
    
  }
</style>