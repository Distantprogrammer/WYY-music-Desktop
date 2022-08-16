import Vue from 'vue'
import App from './App.vue'
import './styles/base.css'
import './util/fonts/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { RecommendThePlayListAPI } from '@/api/index' // 测试接口
// import './util/split.js'
import router from './router'
// import store from './store'

Vue.nextTick(() => {
  const MainScroll = document.querySelector('.wyy_main')
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
})
// 接口测试
// async function testAPI () {
//   const res = await RecommendThePlayListAPI()
//   console.log(res)
// }
// testAPI()
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: (h) => h(App)
}).$mount('#app')
