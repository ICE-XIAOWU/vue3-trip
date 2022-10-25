<script setup>
  import DetailContentArea from '@/components/detail-content-area/detail-content-area.vue';

  const props = defineProps({
    facilityData: {
      type: Object,
      default: () =>({})
    }
  })

  const houseFacilitys = props.facilityData.houseFacility.houseFacilitys
  const facilitySort = props.facilityData.houseFacility.facilitySort
  const currentFacilitys = houseFacilitys.filter((item, index) => {
    return facilitySort.includes(index)
  })
</script>

<template>
  <div class="detail-facility">
    <DetailContentArea title="房屋设施" moreText="查看全部设施">
      <template #content>
        <template v-for="item in currentFacilitys">
          <div class="item">
            <div class="facility-name">
              <img class="icon" :src="item.icon" alt="">
              <span class="name">{{item.groupName}}</span>
            </div>
            <div class="facility-list">
              <template v-for="tip in item.facilitys.slice(0, 4)">
                <div class="facility-tip">{{tip.name}}</div>
              </template>
            </div>
          </div>
        </template>
      </template>
    </DetailContentArea>
  </div>
</template>

<style lang="less" scoped>

</style>