import IuceRequest from '../request/request'

export function getHouseDetailData(houseId) {
  return IuceRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}