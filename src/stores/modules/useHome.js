import { defineStore } from "pinia";
import { getHotSuggestData } from "@/service/modules/home";

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: []
  }),
  actions: {
    async fetchSuggestDataAction() {
      const { data } = await getHotSuggestData()
      this.hotSuggests = data
    }
  }
})

export default useHomeStore