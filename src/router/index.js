import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    component: () => import('@/views/Home/index.vue'),
    children: [
      {
        path: '', // 默认路由发现音乐
        redirect: '/foundMusic'

      },
      {
        path: '/foundMusic', // 发现音乐
        // name: 'foundMusic',
        component: () => import('@/views/Main/main-right/FoundMusic/index.vue'),
        children: [
          {
            path: '', // 默认子路由
            name: 'recommendSong',
            component: () =>
              import(
                '@/views/Main/main-right/FoundMusic/views/RecommendSong.vue'
              )
          },
          {
            path: 'exclusiveCustomization', // 专属定制
            name: 'exclusiveCustomization',
            component: () =>
              import(
                '@/views/Main/main-right/FoundMusic/views/ExclusiveCustomization.vue'
              )
          },
          {
            path: 'songList', // 歌单
            name: 'songList',
            component: () =>
              import('@/views/Main/main-right/FoundMusic/views/SongList.vue')
          },
          {
            path: 'rankingList', // 排行榜
            name: 'rankingList',
            component: () =>
              import('@/views/Main/main-right/FoundMusic/views/RankingList.vue')
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
            component: () =>
              import('@/views/Main/main-right/FoundMusic/views/Singer.vue')
          },
          {
            path: '/latestMusic', // 最新音乐
            name: 'latestMusic',
            component: () =>
              import('@/views/Main/main-right/FoundMusic/views/LatestMusic.vue')
          }
        ]
      },
      {
        path: '/podcast', // 播客
        name: 'podcast',
        component: () => import('@/views/Main/main-right/Podcast/index.vue')
      },
      {
        path: '/search', // 搜索
        // name: 'search',
        component: () => import('@/views/Search/index.vue'),
        // props: true,
        children: [
          {
            path: '', // 默认路由发现音乐
            redirect: '/searchSingle'
          },
          {
            path: '/searchSingle',
            // name: 'searchSingle',
            component: () => import('@/views/Search/single/index.vue')
          }
        ]
      },
      {
        path: '/video', // 视频
        name: 'video',
        component: () => import('@/views/Main/main-right/video/index.vue')
      },
      {
        path: '/attention', // 关注
        name: 'attention',
        component: () => import('@/views/Main/main-right/attention/index.vue')
      },
      {
        path: '/liveStreaming', // 直播
        name: 'liveStreaming',
        component: () => import('@/views/Main/main-right/liveStreaming/index.vue')
      },
      {
        path: '/privateFM', // 私人FM
        name: 'privateFM',
        component: () => import('@/views/Main/main-right/privateFM/index.vue')
      }
    ]
  },
  {
    path: '*', // 404
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
