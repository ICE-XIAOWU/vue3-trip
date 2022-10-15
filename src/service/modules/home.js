import IuceRequest from '../request/request'

export function getHotSuggestData() {
  return IuceRequest.get({
    url: '/home/hotSuggests'
  });
}