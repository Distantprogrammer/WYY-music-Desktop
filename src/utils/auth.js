import Cookies from 'js-cookie'

const CookiesKey = 'wwy-cookies'
// const timeKey = 'hrsaas-timestamp-key' // 获取token时的事件戳

export function getcookies () {
  return Cookies.get(CookiesKey)
}

export function setcookies (cookies) {
  return Cookies.set(CookiesKey, cookies)
}

export function removecookies () {
  return Cookies.remove(CookiesKey)
}

// export function getTimeStamp () {
//   return Cookies.get(timeKey)
// }

// export function setTimeStamp () {
//   return Cookies.set(timeKey, Date.now())
// }
