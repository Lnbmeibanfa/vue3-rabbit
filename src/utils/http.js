//axios的封装
import axios from 'axios'
import useUserStore from '@/stores/login'
import { ElMessage } from 'element-plus'
import router from '@/router'

// 创建axios实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
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
  (res) => res.data,
  (e) => {
    const userStore = useUserStore()
    // 统一错误提示
    ElMessage({
      type: 'warning',
      message: e.response.data.message
    })
    // 401失效处理
    if (e.response.status == 401) {
      // 清除本地用户数据
      // 跳转到登录页
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(e)
  }
)

export default http
