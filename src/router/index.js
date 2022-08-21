import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // 默认子路由
    name: 'recommendSong',
    component: () => import('@/views/Main/components/RecommendSong.vue')
  },
  {
    path: '/exclusiveCustomization', // 专属定制
    name: 'exclusiveCustomization',
    component: () => import('@/views/Main/components/ExclusiveCustomization.vue')
  },
  {
    path: '/songList', // 歌单
    name: 'songList',
    component: () => import('@/views/Main/components/SongList.vue')
  },
  {
    path: '/rankingList', // 排行榜
    name: 'rankingList',
    component: () => import('@/views/Main/components/RankingList.vue')
    // children: [
    //   {
    //     path: '/songList', // 歌单
    //     name: 'songList',
    //     component: () => import('@/views/Main/components/SongList.vue')
    //   }
    // ]
  },
  {
    path: '/singer', // 歌手
    name: 'singer',
    component: () => import('@/views/Main/components/Singer.vue')
  },
  {
    path: '/latestMusic', // 最新音乐
    name: 'latestMusic',
    component: () => import('@/views/Main/components/LatestMusic.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
