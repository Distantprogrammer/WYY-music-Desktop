import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // path: '/',
    // name: 'home',
    // component: () => import('@/views/Home/Home.vue'),
    // children: [
    // {
    path: '/', // 默认子路由
    name: 'recommendSong',
    component: () => import('@/components/Main/RecommendSong.vue')
    //   }
    // ]
  }
]
const router = new VueRouter({
  routes
})

export default router
