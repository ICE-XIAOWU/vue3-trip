<script setup>
  defineProps({
    title: {
      type: String,
      default: '默认标题'
    },
    moreText: {
      type: String,
      default: '更多'
    }
  })
</script>

<template>
  <div class="detail-content-area">
    <!-- 标题 -->
    <div class="title">
      {{ title }}
    </div>
    <!-- 内容 -->
    <div class="content">
      <slot name="content">默认内容</slot>
    </div>
    <!-- 更多 -->
    <div class="more">
      <span>{{ moreText }}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .detail-content-area {
    padding: 10px;
    border-top: 10px solid #f5f6f7;


    .title {
      padding: 10px 0;
      font-size: 20px;
      font-weight: 700;
      border-bottom: 1px solid #eee;
    }

    .content {
      margin: 5px 0 10px;
    }

    .more {
      display: flex;
      justify-content: end;
      align-items: center;
      font-size: 14px;
      font-weight: 600;
      color: var(--primary-color);
    }

  }
</style>