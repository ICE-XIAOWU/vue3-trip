<script setup>
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia';
  import useMainStore from '@/stores/modules/useMain'
  import { formatMonthDay } from '@/utils/formatDate'


  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)
  const startDateStr =  computed(() => formatMonthDay(startDate.value, 'MM.DD'))
  const endDateStr = computed(() => formatMonthDay(endDate.value, 'MM.DD'))
</script>

<template>
  <div class="search-bar">
    <div class="container">
      <div class="date">
        <div class="selcect-date">
          <span class="text">住</span>
          <span>{{startDateStr}}</span>
        </div>
        <div class="selcect-date">
          <span class="text">住</span>
          <span>{{endDateStr}}</span>
        </div>
      </div>
      <div class="content">
        <span class="keyword">关键字/位置/民宿</span>
        <i class="icon"></i>
      </div>
      
    </div>
  </div>
</template>

<style lang="less" scoped>
  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: #fff;

    .container {
      display: flex;
      padding: 10px;
      background-color: #f2f4f6;
      border-radius: 5px;

      .date {
        flex-shrink: 0;

        .selcect-date {
          .text {
            margin-bottom: 2px;
            padding-right: 2px;
            font-size: 10px;
            color: #999;
          }
        }
      }

      .content {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 10px;
        overflow: hidden;
        font-size: 12px;
        color: #999;

        .icon {
          width: 24px;
          height: 24px;
          background: url('@/assets/img/home/home-sprite.png') no-repeat;
          background-position: -29px -151px;
          background-size: 207px 192px;
        }
      }
    }
  }
</style>