<script setup>
  const props = defineProps({
    housePics: {
      type: Array,
      default: () => []
    }
  })

  // 获取轮播图分组数据
  const picsGroup = {}
  for (const item of props.housePics) {
    let valueArr = picsGroup[item.enumPictureCategory]
    if(!valueArr) {
      picsGroup[item.enumPictureCategory] = []
      valueArr = picsGroup[item.enumPictureCategory]
    }
    valueArr.push(item)
  }

  // 格式化标签
  const formatLabel = (label) => {
    const LabelReg = /【(.*?)】/i
    const result = LabelReg.exec(label)
    return result[1]
  }

  // 获取分类的索引
  /**
   * 
   * @param {Array} group 当前的标签组
   * @param {Object} currentItem 当前选择的图片对象
   * @return {Number} 返回查找到的索引
   */
  const getCategoreIndex = (group, currentItem) => group.findIndex(item => item === currentItem) + 1;
</script>

<template>
  <div class="detail-swipe" v-if="housePics">
    <van-swipe class="swipe-list">
      <template v-for="item in housePics" >
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value, key) in picsGroup">
            <div class="label" :class="{active: key == housePics[active]?.enumPictureCategory}">
              <span>{{ formatLabel(value[0].title) }}</span>
              <span v-if="key == housePics[active]?.enumPictureCategory">
                {{ `${getCategoreIndex(value, housePics[active])}/${value.length}` }}
              </span>
            </div>
          </template>  
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
  .detail-swipe {
    .swipe-list {
      position: relative;

      .item {
        img {
          width: 100%;
        }
      }

      .custom-indicator {
          position: absolute;
          right: 5px;
          bottom: 5px;
          display: flex;
          padding: 2px 5px;
          font-size: 12px;
          color: #fff;
          background: rgba(0, 0, 0, 0.6);

          .label {
            vertical-align: bottom;
            margin: 0 5px;

            &.active {
              padding: 0 5px;
              color: #000;
              background-color: #fff;
              border-radius: 5px;
            }
          }
        }
    }
  }
</style>