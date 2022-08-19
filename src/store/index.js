import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'

Vue.use(Vuex)

const PLAYMUSIC = 'PLAYMUSICMSG'

export default new Vuex.Store({
  state: {
    // 歌曲信息
    playMusicMsg: getItem(PLAYMUSIC)
  },
  getters: {},
  mutations: {
    getIdMusic (state, paylond) {
      state.playMusicMsg = paylond
      setItem(PLAYMUSIC, paylond)
    }
  },
  actions: {},
  modules: {}
})
