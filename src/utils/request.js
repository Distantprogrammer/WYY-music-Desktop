import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000/'
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
