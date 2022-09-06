import axios from 'axios'
import { getSongUrlAPI } from '@/api'
export default async function down (id, level = 'standard', downFileName) {
  // 判断是否下载多个 即id是不是数组
  if (Object.prototype.toString.call(id) === '[object Array]') {
    id = id.join(',')
  }
  console.log(id)
  const { data } = await getSongUrlAPI({
    id: id,
    level: level
  })
  const url = data.data[0].url
  const downUrl = url // 音乐地址 : 例如: http://m10.music.126.net/20201119111830/51f6bbc51ea067e9d258fa73183b16b1/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/2828582250/29aa/7bcc/f324/6699f160b0c39b010e6e009d271e4948.mp3
  const fileName = downFileName // 文件名设置: 起风了
  axios({
    method: 'get',
    url: downUrl,
    responseType: 'blob',
    headers: { 'content-type': 'audio/mpeg' }
    // headers: {'content-length': '4066786', 'content-type': 'audio/mpeg'}
  }).then((res) => {
    // eslint-disable-next-line no-unused-vars
    const blobType = 'application/force-download' // 设置blob请求头
    const blob = new Blob([res.data], { type: res.data.type }) // 创建blob 设置blob文件类型 data 设置为后端返回的文件(例如mp3,jpeg) type:这里设置后端返回的类型 为 mp3
    const downa = document.createElement('a') // 创建A标签
    const href = window.URL.createObjectURL(blob) // 创建下载的链接
    downa.href = href // 下载地址
    downa.download = fileName // 下载文件名
    document.body.appendChild(downa)
    downa.click() // 模拟点击A标签
    document.body.removeChild(downa) // 下载完成移除元素
    window.URL.revokeObjectURL(href) // 释放blob对象
  }).catch(function (error) {
    console.log(error)
  })
}
