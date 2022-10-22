import { defineStore } from "pinia";
import { getCityAllData } from "@/service";

const useCityStore = defineStore('city', {
  state: () => ({
    // 所有城市
    allCities: {},
    // 当前选择城市
    currentCity: {
      cityName: '广州'
    }
  }),
  actions: {
    // 获取所有城市的数据
    async fetchCityAllDataAction() {
      const { data } = await getCityAllData()
      this.allCities = data
    }
  }
})

export default useCityStore