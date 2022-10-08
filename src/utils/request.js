import axios from 'axios'
// import store from '@/store'
// import { getCookie } from '@/utils/auth'
const request = axios.create({
  // withCredentials: true, 表示每次请求可以携带 cookie 和 session
  // 后台的跨域模块  "Access-Control-Allow-Origin : “*” 就不能写 * 号了 必须指定 域名  比如 "Access-Control-Allow-Origin : “http://localhost:8080”
  // baseURL: process.env.VUE_APP_BASE_API, // 根据开发环境还是生产环境更改基准地址
  timeout: 5000, // 超时时间
  // baseURL: 'http://192.168.21.30:3000/'
  // baseURL: 'http://43.139.36.66:3000',
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://netease-cloud-music-api-silk-three-87.vercel.app/'
  // baseURL: 'https://music-theta-ruddy.vercel.app/'
  // baseURL: 'http://192.168.21.52:3000/' // 备用接口
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

/**
 * 请求拦截器
 */
request.interceptors.request.use(config => {
  config.withCredentials = true
  return config
})
/**
 * 响应拦截器
 */
request.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error)
})

export default request
