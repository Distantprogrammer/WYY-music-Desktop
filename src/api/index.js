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
import {
  CloudSearch,
  Search,
  DefaultSearch,
  HotSearch,
  DetailSearch,
  SuggestSearch,
  MultimatchSearch
} from './Search'
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

/**
 * 搜索
 */
export const CloudSearchAPI = CloudSearch // 搜索(详情)
export const SearchAPI = Search // 搜索(简约)
export const DefaultSearchAPI = DefaultSearch // 默认搜索关键词
export const HotSearchAPI = HotSearch // 热搜列表(简略)
export const DetailSearchAPI = DetailSearch // 热搜列表(详细)
export const SuggestSearchAPI = SuggestSearch // 搜索建议
export const MultimatchSearchAPI = MultimatchSearch // 搜索多重匹配
