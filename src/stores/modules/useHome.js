import { defineStore } from "pinia";
import { getHotSuggestData, getCategoriesData, getHouseListData } from "@/service/modules/home";
import { Toast } from "vant";

const useHomeStore = defineStore('home', {
  state: () => ({
    // 热门建议
    hotSuggests: [],
    categories: [],

    currentPage: 1,
    houseList: []
  }),
  actions: {
    // 热门建议请求
    async fetchSuggestDataAction() {
      const { data } = await getHotSuggestData()
      this.hotSuggests = data
    },
    // 分类网络请求
    async fetchCategoriesDataAction() {
      const {code, data} = await getCategoriesData();
      this.categories = data;
    },
    // 房屋列表数据
    async fetchHouseListDataAction() {
      const { data } = await getHouseListData(this.currentPage++)
      this.houseList.push(...data)
    }
  }
})

export default useHomeStore