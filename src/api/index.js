import {
  HomeBanner,
  RecommendThePlayList,
  RecentPodcast,
  RecommendNewMusic,
  ExclusiveAndPoredOver,
  RecommendedMV
} from './DiscovrMusic'

import { getSongById, getLyricById } from './Play'
import { SongListDetails, RankingList } from './RankingList'
/**
 * 个性推荐
 */
export const HomeBannerAPI = HomeBanner // 轮播图
export const RecommendThePlayListAPI = RecommendThePlayList // 推荐歌单
export const RecentPodcastAPI = RecentPodcast // 最近播客
export const RecommendNewMusicAPI = RecommendNewMusic // 最新音乐
export const ExclusiveAndPoredOverAPI = ExclusiveAndPoredOver // 独家放送
export const RecommendedMVAPI = RecommendedMV // 推荐MV

/**
 * 播放音乐
 */
export const getSongByIdAPI = getSongById // 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById // 歌曲 - 歌词数据
/**
 * 歌单
 */
export const SongListDetailsAPI = SongListDetails // 歌单详情
export const RankingListAPI = RankingList // 排行榜入口
