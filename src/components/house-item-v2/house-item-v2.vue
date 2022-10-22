<script setup>
  defineProps({
    itemData: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<template>
  <div class="house-item-v2">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="房屋图片" />
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          {{itemData.location}}
        </div>
        <div class="title text-ellipsis-two">{{itemData?.houseName}}</div>
        <div class="summary">{{itemData?.summaryText}}</div>
        <div class="prices">
          <div class="final-price">¥{{itemData?.finalPrice}}</div>
          <div class="product-price">¥{{itemData?.productPrice}}</div>
          <div class="lables" 
            :style="{
              background: itemData?.priceTipBadge?.background,
              border: itemData?.priceTipBadge?.border,
              color: itemData?.priceTipBadge?.color
            }">
            {{itemData?.priceTipBadge?.text}}
          </div>
          <!-- <span>{{itemData.priceTipBadge.text}}</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .house-item-v2 {
    width: 50%;

    .item-inner {
      margin: 8px;
      background-color: #fff;
      border-radius: 8px;
      overflow: hidden;

      .cover {
        img {
          width: 100%;
        }
      }

      .info {
        padding: 10px;
        font-size: 14px;

        .location {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #333;

          img {
            width: 12px;
          }
        }

        .summary {
          font-size: 12px;
          color: #333;
        }

        .title {
          margin: 5px 0;
        }

        .prices {
          display: flex;
          align-items: center;
          margin-top: 5px;

          .final-price {
            font-size: 14px;
            color: var(--primary-color);
          }

          .product-price {
            margin-left: 5px;
            font-size: 12px;
            color: #ccc;
            text-decoration: line-through;
          }

          .lables {
            font-size: 12px;
            margin-left: 5px;
            padding: 2px 5px;
            border-radius: 20px;
            background-image: linear-gradient(270deg, #f66, #ff9f9f);
          }
        }
      }
    }
  }
</style>