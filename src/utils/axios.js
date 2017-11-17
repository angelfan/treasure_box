import axios from 'axios'
import { Message, Loading } from 'element-ui'

let loadingInstance = null

// 创建axios实例
const service = axios.create({
  baseURL: process.env.SERVER_API_HOST,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  responseType: 'json'
})

service.interceptors.request.use(function(config) {
  loadingInstance = Loading.service({
    target: '#main-view',
    text: '数据加载中...',
    body: true
  })
  return config
}, function(error) {
  // Do something with request error
  return Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    if (loadingInstance) {
      loadingInstance.close()
    }
    return response
  },
  error => {
    console.log('err' + error)// for debug
    if (loadingInstance) {
      loadingInstance.close()
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
