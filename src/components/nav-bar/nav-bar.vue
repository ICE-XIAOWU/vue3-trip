<script setup>
  import { useRouter } from 'vue-router'

  defineProps({
    title: {
      type: String,
      default: '默认标题'
    },
    isLeft: {
      type: Boolean,
      default: true
    },
    leftText: {
      type: String,
      default: '返回'
    },
    isRight: {
      type: Boolean,
      default: false
    },
    rightText: {
      type: String,
      default: '按钮'
    }
  })

  const router = useRouter()

  const handleLeftClick = () => {
    router.back()
  }
</script>

<template>
  <div class="nav-bar">
    <van-nav-bar :title="title" @click-left="handleLeftClick">
      <template #left>
        <slot name="left" v-if="isLeft">
          <span class="left-text">{{ leftText }}</span>
        </slot>
      </template>

    
      <template #right v-if="isRight">
        <slot name="right">{{ rightText }}</slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<style lang="less" scoped>
  .nav-bar {
    .left-text {
      color: var(--primary-color);
    }
  }
</style>