<script setup>
  defineProps({
    houseInfos: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<template>
  <div class="detail-infos">
    <div class="title">{{ houseInfos.houseName }}</div>
    <div class="tag-list">
      <template v-for="tag in houseInfos.houseTags">
        <span 
        v-if="tag?.tagText"
        class="tag"
        :style="{
          background: tag?.tagText?.background?.color,
          color: tag?.tagText?.color
        }"
        >
          {{ tag?.tagText?.text }}
        </span>
      </template>
    </div>
    <div class="item">
      <div class="score">
        <span class="overall">{{ houseInfos.commentBrief?.overall }}</span>
        <span class="score-title">{{ houseInfos.commentBrief?.scoreTitle }}</span>
        <span class="comment">{{ houseInfos.commentBrief?.commentBrief }}</span>
      </div>
      <div class="more">{{`${houseInfos.commentBrief?.totalCountStr}条评论`}}<van-icon class="icon" name="arrow" /> </div>
    </div>
    <div class="item">
      <div class="address">
        {{ houseInfos.nearByPosition?.address }}
      </div>
      <div class="more">地图·周边<van-icon class="icon" name="arrow" /> </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .detail-infos {
    margin: 15px 0;
    padding: 0 15px;

    .title {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      font-size: 12px;

      .tag {
        margin-right: 5px;
        margin-bottom: 10px;
        padding: 1px 3px;
      }
    }

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding: 10px;
      font-size: 12px;
      background-color: #f5f7fa;
      border-radius: 5px;

      .score {
        font-weight: 700;
        .overall {
          font-size: 18px;
        }
        .comment {
          color: #666;
        }
      }

      .address {
        font-size: 14px;
        font-weight: 700;
      }

      .more {
        color: var(--primary-color);

        .icon {
          position: relative;
          top: 1px;
        }
      }
    }
  }
</style>