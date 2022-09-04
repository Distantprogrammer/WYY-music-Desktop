import store from '@/store'
// 传获取到数据里的data
// const arr = []
export default function playFn (data) {
  // console.log(list)
  // console.log(id)
  // arr.unshift(id)
  // list.forEach(obj => {
  //   arr.push(obj.id)
  // })
  // console.log(arr)
  // console.log(111)
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
    // if (!arr.includes(data)) {
    //   arr.unshift(data)
    // }
    store.commit('getIdMusic', data)
  } else {
    Promise.reject(new Error('数据出现问题，请把问题提交到邮箱1814379725@qq.com修复'))
  }

  // console.log(list)
  // const arr = Object.keys(list)
  // Object.keys(list).forEach(item => {
  //   // console.log(item)
  //   if (item === 'id') {
  //     Object.values(item)
  //     arr.push(Object.values(item))
  //   }
  // })
  //   arr.push(list.id)
  //   console.log(arr)
  //   console.log(list)
  //   // 判断是不是数字或者是字符传
  // } else if (Object.prototype.toString.call(list) === '[object String]' || Object.prototype.toString.call(list) === '[object Number]') {
  //   list = [list]
  // } else {
  //   Promise.reject(new Error('数据出现问题，请把问题提交到邮箱1814379725@qq.com修复'))
  // }
  // store.commit('getIdMusic', data)
}
