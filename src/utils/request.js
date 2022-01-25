import axios from 'axios'

const service = axios.create({
  baseURL: 'https://apis.imooc.com',
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    console.log(222)
  },
  error => {
    console.log(222)
    return Promise.reject(error)
  }
)

export default service
