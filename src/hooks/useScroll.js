import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import _ from 'underscore'

export default function useScroll() {
  const isReachBottom = ref(false) // 是否到达底部
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = _.throttle(() => {
    clientHeight.value = document.documentElement.clientHeight; // 可视页面高度
    scrollTop.value = document.documentElement.scrollTop; // 当前已滚动的值
    scrollHeight.value = document.documentElement.scrollHeight; // 页面可滚动的高度

    if(clientHeight.value + scrollTop.value >= scrollHeight.value) { // 是否达到底部
      isReachBottom.value = true
    }
  }, 0)

  onMounted(() => { // 添加监听函数
    window.addEventListener('scroll', scrollListenerHandler)
  })

  onUnmounted(() => { // 移除监听函数
    window.removeEventListener('scroll', scrollListenerHandler)
  })

  // keep-alive 组件
  onActivated(() => { // 添加监听函数
    window.addEventListener('scroll', scrollListenerHandler)
  })

  onDeactivated(() => { // 移除监听函数
    window.addEventListener('scroll', scrollListenerHandler)
  }) 

  return { isReachBottom, clientHeight, scrollHeight, scrollTop }
}