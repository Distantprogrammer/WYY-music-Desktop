import store from '@/store'
// 传获取到数据里的data
// const arr = []
export default function playFn (data) {
  let arr = []

  // 判断传过来的是不是数组
  if (Object.prototype.toString.call(data) === '[object Array]') {
    // 有数组过来清空arr 应为这是歌单
    arr = []
    data.forEach(obj => {
      arr.push(obj.id)
    })
    store.commit('getIdMusic', arr)
  } else if (Object.prototype.toString.call(data) === '[object String]' || Object.prototype.toString.call(data) === '[object Number]') {
    // 判断是不是重复提交

    store.commit('getIdMusic', data)
  } else {
    Promise.reject(new Error('数据出现问题，请把问题提交到邮箱1814379725@qq.com修复'))
  }
}
