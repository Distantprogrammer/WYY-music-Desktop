import { playlistTrackAPI, SongListDetailsAPI } from '@/api'
import store from '@/store'
import router from '@/router'
export default async function songList (data) {
  // 判断数据是不是全球榜单的 及传过来的数据为id
  // 数据为歌单id
  if (Object.prototype.toString.call(data) === '[object Number]') {
    const res = await SongListDetailsAPI({
      id: data
    })
    const { data: { songs } } = await playlistTrackAPI({
      id: data,
      limit: 50,
      offset: 0
    })
    const { data: { playlist } } = res
    playlist.tracks = songs
    store.commit('setsongListMsg', playlist)
  } else {
    store.commit('setsongListMsg', data)
  }
  // 数据传入vuex
  router.push({ name: 'songListDeta' })
}
