import Vue from 'vue'
import axios from 'axios'

// 添加全局方法
Vue.prototype.$axios = axios

// axios配置
axios.defaults.baseURL = 'http://localhost/index.php';



export default axios