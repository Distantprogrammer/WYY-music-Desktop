import request from '@/util/request'

// 推荐歌单 可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)
export const RecommendThePlayList = (limit) =>
  request({
    url: '/personalized?limit=10'
    // limit: 10
  })
