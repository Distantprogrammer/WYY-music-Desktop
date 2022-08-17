import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playId: ''
  },
  getters: {},
  mutations: {
    getIdMusic (state, paylond) {
      state.playId = paylond
    }
  },
  actions: {},
  modules: {}
})
