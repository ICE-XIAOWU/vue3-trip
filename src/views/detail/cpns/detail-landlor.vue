<script setup>
  import DetailContentArea from '@/components/detail-content-area/detail-content-area.vue'

  defineProps({
    landlorData: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<template>
  <div class="detail-landlor">
    <DetailContentArea title="房东介绍" moreText="查看房东主页">
      <template #content>
        <div class="landlor-level">
          <img :src="landlorData?.topScroll" alt="">
        </div>
        <div class="landlor-info">
          <div class="logo">
            <img :src="landlorData?.hotelLogo" alt="">
          </div>
          <div class="info">
            <div class="name-label">
              <div class="name">{{ landlorData?.hotelName }}</div>
              <template v-for="item in landlorData.hotelTags">
                <div class="label">{{item.tagText.text}}</div>
              </template>
            </div>
            <div class="contact">联系房东</div>
          </div>
        </div>
        <div class="summary">
          <template v-for="item in landlorData.hotelSummary">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="introduction">{{ item.introduction }}</div>
              <div class="tip"> {{ item.tip }} </div>
            </div>
          </template>
        </div>
      </template>
    </DetailContentArea>
  </div>
</template>

<style lang="less" scoped>

</style>