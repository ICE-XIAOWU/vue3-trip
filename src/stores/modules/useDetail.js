import { defineStore } from "pinia";
import { getHouseDetailData } from '@/service'

const useDetailStore = defineStore('detail', {
  state: () => ({
    mainPart: {}
  }),
  actions: {
    async fetchHouseDetailDataAction(id) {
      const { data } = await getHouseDetailData(id)
      this.mainPart = data.mainPart
    }
  }
})

export default useDetailStore