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
import { getSongUrl } from './download'
import { phoneLogin, emailLogin, QRkey, QRcreate, QRcheck, loginStatus } from './login'
import { userAccount, userDetail } from './user'
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

/**
 * 下载
 */
export const getSongUrlAPI = getSongUrl// 歌曲url

/**
 *登录
 */
export const loginStatusAPI = loginStatus // 登录状态
export const phoneLoginAPI = phoneLogin // 手机登录
export const emailLoginAPI = emailLogin // 邮箱登录
export const QRkeyAPI = QRkey // 二维码生成key
export const QRcreateAPI = QRcreate // 二维码生成接口
export const QRcheckAPI = QRcheck // 二维码检测扫码状态接口

/**
 * 用户信息
 */
export const userDetailAPI = userDetail // 用户详情
export const userAccountAPI = userAccount // 账号信息
