import IuceRequest from '../request/request'

// 获取所有城市请求
export function getCityAllData() {
  return IuceRequest.get({
    url: '/city/all'
  })
}