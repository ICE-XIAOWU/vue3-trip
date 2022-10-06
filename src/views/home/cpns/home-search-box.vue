<script setup>
  import router from '@/router';

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
</script>

<template>
  <div class="search-box">
    <!-- 位置 -->
    <div class="location">
      <div class="city" @click="handleCityClick">广州</div>
      <div class="position" @click="handleMyPositionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
  .search-box {
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
  }
</style>