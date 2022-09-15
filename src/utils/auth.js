import Cookies from 'js-cookie'

const CookiesKey = 'wyy-cookies'

export function setCookies (string) {
  return Cookies.set(CookiesKey, string)
}

export function getCookie (key) {
  return Cookies.get(key) ?? localStorage.getItem(key)
}

export function removeCookie (key) {
  Cookies.remove(key)
  localStorage.removeItem(key)
}
