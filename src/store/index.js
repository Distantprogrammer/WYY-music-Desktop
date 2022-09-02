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
    getIdMusic (state, id) {
      console.log(33, id)
      state.playMusicMsg = id
      setItem(PLAYMUSIC, id)
    }
  },
  actions: {
    getIdMusic (context, id) {
      context.commit('getIdMusic', id)
    }
  },
  modules: {}
})
