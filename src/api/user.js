import request from '@/utils/request'

// 获取用户详情 说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户详情
export const userDetail = function (uid) {
  return request({
    url: `/user/detail?uid=${uid}`,
    method: 'post'
  })
}
// 获取账号信息  登录后调用此接口 ,可获取用户账号信息
export const userAccount = function () {
  return request({
    url: '/user/account',
    method: 'post'
  })
}
