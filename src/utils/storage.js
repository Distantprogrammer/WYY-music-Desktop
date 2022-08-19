/**
 * 封装本地储存模块
 */

export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export const getItem = (key) => {
  try {
    const data = window.localStorage.getItem(key)
    return JSON.parse(data) // 数据不是json数据会报错，走下面
  } catch (err) {
    return window.localStorage.getItem(key)
  }
}

export const reomveItem = (key) => {
  return window.localStorage.removeItem(key)
}
