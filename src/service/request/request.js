import axios from 'axios'
import { BASE_URL, TIMEOUT } from "./config"

import useMainStore from '@/stores/modules/useMain'
const mainStore = useMainStore()

class IuceRequest {
	constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = true
      return config
    }, err => err)

    this.instance.interceptors.response.use(res => {
      setTimeout(() => mainStore.isLoading = false, 500)
      return res
    }, err => {
      setTimeout(() => mainStore.isLoading = false, 500)
      return err 
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => resolve(res.data)).catch(err => {
        console.log('request err:', err)
        reject(err)
      })
      
    })
  }
  
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new IuceRequest(BASE_URL, TIMEOUT)