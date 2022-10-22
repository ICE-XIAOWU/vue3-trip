<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    itemData: {
      type: Object,
      default: () => ({})
    }
  })

  const formatScore = computed(() => Number(props.itemData?.commentScore))
</script>

<template>
  <div class="house-item-v1">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="房屋图片" />
      </div>
      <div class="info">
        <div class="summary">{{itemData?.summaryText}}</div>
        <div class="title text-ellipsis-two">{{itemData?.houseName}}</div>
        <div class="score-price">
          <van-rate :model-value="formatScore" readonly allow-half color="#fff" :size="14" />
          <div class="price">¥{{itemData?.finalPrice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .house-item-v1 {
    width: 50%;

    .item-inner {
      position: relative;
      margin: 8px;
      border-radius: 8px;
      overflow: hidden;

      .cover {
        img {
          width: 100%;
        }
      }

      .info {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 10px 10px;
        color: #fff;
        font-size: 14px;

        .summary {
          font-size: 12px;
        }

        .title {
          margin: 5px 0;
        }

        .score-price {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
</style>