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
        <div class="content">
          <template v-for="item in currentFacilitys">
          <div class="item">
            <div class="facility-name">
              <img class="icon" :src="item.icon" alt="">
              <span class="name">{{item.groupName}}</span>
            </div>
            <div class="facility-list">
              <template v-for="tip in item.facilitys.slice(0, 4)">
                <div class="facility-tip">
                  <i class="icon-check"></i>
                  {{tip.name}}
                </div>
              </template>
            </div>
          </div>
        </template>
        </div>
      </template>
    </DetailContentArea>
  </div>
</template>

<style lang="less" scoped>
  .detail-facility {
    .content {
      padding: 5px 0;
      box-sizing: border-box;
      border-radius: 5px;
      background-color: #f7f9fb;

      .item {
        display: flex;
        align-items: center;
        margin: 25px 0;

        .facility-name {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90px;

          .icon {
            width: 24px;
            margin-bottom: 5px;
          }
        }

        .facility-list {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          align-items: center;

          .facility-tip {
            display: flex;
            align-items: center;
            width: 50%;
            margin: 5px 0;
          }
        }
      }
    }
  }
</style>