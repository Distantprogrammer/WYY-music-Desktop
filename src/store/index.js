import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'
import user from './user'
import getters from './getters'

Vue.use(Vuex)

const officialMUSIC = 'officialMUSICLISTMSG'
const songList = 'songList'

export default new Vuex.Store({
  state: {
    // 歌曲信息
    officialMusicListMsg: JSON.parse(window.sessionStorage.getItem(officialMUSIC)), // 排行榜数据
    playListMusic: [], // 列表
    playOneMusic: null, // 单数据
    songListMsg: getItem(songList) // 歌单数据
    // delfirst: null // 被删除的第一个元素
  },
  mutations: {
    // 设置数据
    getIdMusic (state, data) {
      if (Object.prototype.toString.call(data) === '[object Array]') {
        state.playListMusic = data
        state.playListMusic = JSON.parse(JSON.stringify(state.playListMusic))
      } else {
        state.playOneMusic = data
      }
    },
    // 合并的数据
    MergeList (state, list) {
      state.playMusicListMsg = list
    },
    // 歌单数据
    setsongListMsg (state, data) {
      state.songListMsg = data
      setItem(songList, data)
    },
    // 排行榜数据
    setofficialMusicListMsg (state, data) {
      state.officialMusicListMsg = data
      // 储存到sessionStorage里去
      window.sessionStorage.setItem(officialMUSIC, JSON.stringify(data))
      // setItem(officialMUSIC, data)
    }
  },
  actions: {

  },
  modules: {
    user
  },
  getters
})
