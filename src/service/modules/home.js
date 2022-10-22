import IuceRequest from '../request/request'

// 热门建议请求
export function getHotSuggestData() {
  return IuceRequest.get({
    url: '/home/hotSuggests'
  });
}

// 分类请求
export function getCategoriesData() {
  return IuceRequest.get({
    url: '/home/categories'
  })
}

// 房屋数据请求
export function getHouseListData(currentPage) {
  return IuceRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}