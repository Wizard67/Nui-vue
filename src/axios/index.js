import Vue from 'vue'
import axios from 'axios'

// axios配置

// 设置默认路径
axios.defaults.baseURL = 'http://localhost/index.php'
// 设置报头
axios.defaults.headers = {
  // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
}

// 设置 http request 拦截器，添加 token 信息
axios.interceptors.request.use(
  config => {
    if (localStorage.token) {
      config.headers.Authorization = `token ${localStorage.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios