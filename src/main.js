import Vue from 'vue'
import App from './App.vue'
import './styles/base.css'
import './styles/vant.css'
import '@/styles/icon.css'
import './utils/fonts/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/utils/dayjs.js' // 时间过滤 过滤时间戳
import '@/utils/minite.js' // 时间过滤 过滤秒
import './utils/vant' // vant组件库
import _ from 'lodash'
// import { SongListDetailsAPI } from '@/api/index' // 测试接口
// // import { getItem } from '@/utils/storage'
// import { RecommendNewMusicAPI } from '@/api/index' // 解决第一次访问无数据 无效
// import './utils/split.js'
import router from './router'
import store from './store'

// 自定义指令
import * as directives from '@/directives'
const arr = Object.keys(directives)
arr.forEach(keys => {
  Vue.directive(keys, directives[keys])
})

window.onload = function () {
  console.log(111)
  const MainScroll = this.$refs.wyy_main
  const html = document.documentElement // 获取html
  const WyyTop = document.querySelector('.wyy_top')
  const WyyFoot = document.querySelector('.wyy_foot')
  function getHeight () {
    // 实时更改 滚动条的高度
    const height =
      html.clientHeight - WyyTop.clientHeight - WyyFoot.clientHeight + 2
    MainScroll.style.height = height + 'px'
  }
  // 获取宽度
  window.addEventListener('resize', getHeight)
  getHeight()
}

Vue.prototype._ = _

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  _,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
