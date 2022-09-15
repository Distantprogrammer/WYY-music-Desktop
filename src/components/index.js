// 该文件负责所有的公共的组件的全局注册   Vue.use
import playBtn from './playBtn'
import songList from './songList'
export default {
  install (Vue) {
    Vue.component('playBtn', playBtn)
    Vue.component('songList', songList)
  }
}
