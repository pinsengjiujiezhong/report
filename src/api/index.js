import request from '../utils/request'

const icode = '13926EAFCAA16CC3'

const api = {
  wordCloud: () => {
    return request({
      url: '/screen/wordcloud',
      method: 'get',
      params: { icode }
    })
  },
  mapScatter: () => {
    return request({
      url: '/screen/scatter',
      method: 'get',
      params: { icode }
    })
  },
  screenData: () => {
    return request({
      url: '/screen/data',
      method: 'get',
      params: { icode }
    })
  }
}

export default api
