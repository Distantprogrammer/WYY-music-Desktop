import axios from 'axios'

const request = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // 根据开发环境还是生产环境更改基准地址
  // timeout: 5000, // 超时时间
  // baseURL: 'http://192.168.21.30:3000/'
  // baseURL: 'http://43.139.36.66:3000'
  baseURL: 'http://localhost:3000'
  // baseURL: 'https://netease-cloud-music-api-silk-three-87.vercel.app/'
  // baseURL: 'https://music-theta-ruddy.vercel.app/'
  // baseURL: 'http://192.168.21.52:3000/' // 备用接口
})

/**
 * 请求拦截器
 */
request.interceptors.request.use()
/**
 * 响应拦截器
 */
request.interceptors.response.use(response => {
  // console.log(response)
  // const configUrl = response.config.url
  // 处理最新音乐接口获取的数据
  // if (configUrl === '/personalized/newsong') {
  //   // response。data
  //   // console.log(11)
  // }
  // console.log(response)
  return response
}, error => {
  console.log(error)
})

export default request
