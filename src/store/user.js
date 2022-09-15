import { setItem, getItem, reomveItem } from '@/utils/storage'
import { setCookies, removeCookie } from '@/utils/auth'
const cookies = 'wyy-cookies'
const state = {
  cookies: getItem(cookies),
  userInfo: getItem('userInfo') ?? ''
}
const mutations = {
  // 设置Cookies
  setcookies (state, cookie) {
    state.cookies = cookie // 设置token
    setCookies(cookie)
    setItem(cookies, cookie) // vuex和 缓存数据的同步
  },
  // 删除 Cookies
  removecookies (state) {
    state.cookies = null // 删除vuex的token
    reomveItem(cookies) // 先清除 vuex  再清除缓存 vuex和 缓存数据的同步
    removeCookie(cookies)
  },
  // 设置用户信息
  setUserInfo (state, data) {
    state.userInfo = data
    setItem('userInfo', data)
  }
}
const actions = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
