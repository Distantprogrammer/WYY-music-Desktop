import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'

Vue.use(Vuex)

const PLAYMUSIC = 'PLAYMUSICLISTMSG'

export default new Vuex.Store({
  state: {
    // 歌曲信息
    playMusicListMsg: getItem(PLAYMUSIC), //
    playListMusic: [], // 列表
    playOneMusic: null // 单数据
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
    }
    // delIdMusic (state, index) {
    //   // 删除第一条数据
    //   state.delfirst = state.playMusicListMsg.shift()
    //   setItem(PLAYMUSIC, state.playMusicListMsg) // 重新赋值
    // }
  },
  // actions: {
  //   getIdMusic (context, id) {
  //     context.commit('getIdMusic', id)
  //   }
  // },
  // 歌单列表
  modules: {}
})
