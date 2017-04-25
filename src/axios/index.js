import Vue from 'vue'
import axios from 'axios'

// 添加全局方法
Vue.prototype.$axios = axios

// axios配置

// 设置默认路径
axios.defaults.baseURL = 'http://localhost/index.php'
// 携带 cookie 请求
axios.defaults.withCredentials = true;

export default axios