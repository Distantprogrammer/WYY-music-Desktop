import Vue from 'vue'
import dayjs from 'dayjs'

// 加载中文语言包
import 'dayjs/locale/zh-cn'

// import relativeTime from 'dayjs/plugin/relativeTime'

// // // 配置使用处理相对时间的插件
// dayjs.extend(relativeTime)

// 配置使用中文语言包
dayjs.locale('zh-cn')
// console.log(dayjs(197659).format('mm:ss'))
// 全局过滤器：处理相对时间
Vue.filter('secondeTime', (value) => {
  return dayjs(Number(value)).format('mm:ss')
})

Vue.filter('monthTime', (value, format) => {
  return dayjs(value).format(format)
})
