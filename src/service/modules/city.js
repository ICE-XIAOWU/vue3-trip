import IuceRequest from '../request/request'

export function getCityAllData() {
  return IuceRequest.get({
    url: '/city/all'
  })
}