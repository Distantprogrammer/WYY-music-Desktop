import { setItem, getItem } from '@/utils/storage'
import { setcookies, getcookies, removecookies } from '@/utils/auth'

const state = {
  cookies: getcookies(),
  userInfo: getItem('userInfo')
}
const mutations = {
  // 设置Cookies
  setcookies (state, cookies) {
    state.cookies = cookies // 设置token
    setcookies(cookies) // vuex和 缓存数据的同步
  },
  // 删除 Cookies
  removecookies (cookies) {
    state.cookies = null // 删除vuex的token
    removecookies() // 先清除 vuex  再清除缓存 vuex和 缓存数据的同步
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
