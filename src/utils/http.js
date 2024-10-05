//axios的封装
import axios from 'axios'

// 创建axios实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在发请求前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// axios响应拦截器
http.interceptors.response.use(
  function (response) {
    // 2XX范围内的状态码会触发该函数
    // 对响应数据做点什么
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default http
