import request from '@/util/request'

// 推荐歌单 可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)
export const RecommendThePlayList = (limit) =>
  request({
    url: '/personalized?limit=10'
    // limit: 10
  })
/**
 * 登录后才可以获取
 */
// 最近播放-播客 可选参数 : limit : 返回数量 , 默认为 100
export const RecentPodcast = (limit) =>
  request({
    url: '/record/recent/dj',
    limit
  })

// 推荐新音乐 可选参数 : limit: 取出数量 , 默认为 10 (不支持 offset)
export const RecommendNewMusic = (limit) =>
  request({
    url: '/personalized/newsong',
    limit
  })
// 独家放送列表
// limit : 返回数量 , 默认为 60
// offset : 偏移数量，用于分页 , 如 :( 页数 -1)*60, 其中 60 为 limit 的值 , 默认为 0
