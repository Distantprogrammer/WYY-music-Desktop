<template>
  <div class="rankingList"
  v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="tableData"
   >
    <!-- 官方榜 -->
    <div class="official_list" v-if=" official_list && soaringTracks">
      <h3 class="public_title">
        官方榜
        <!-- <i class="iconfont icon-arrow-right-bold arrow_right"></i> -->
      </h3>
      <!-- portion 部分  显示部分数据-->
      <div
        class="portion_list"
        v-for="(obj, index) in official_list"
        :key="index"
      >
        <div class="portion_img" @click="$router.push({path:'/songListDeta'})">
          <Playbtn class="playBtn" />
          <span class="updateTime"
            >{{ obj.updateTime | monthTime('MM月DD日') }}更新</span
          >
          <img :src="obj.coverImgUrl" alt="" />
        </div>
           <portionTitle v-if="official_list[index].ToplistType==='S'" :officiaTracks='soaringTracks'/>
           <portionTitle v-if="official_list[index].ToplistType==='O'" :officiaTracks='newSongTracks'/>
           <portionTitle v-if="official_list[index].ToplistType==='N'" :officiaTracks='originalTracks'/>
           <portionTitle v-if="official_list[index].ToplistType==='H'" :officiaTracks='hostSongTracks'/>
      </div>
      <!-- for循环 -->
      <div class="new_list"></div>
      <div class="original_list"></div>
      <div class="host_list"></div>
    </div>
    <!-- 全球榜 -->
    <div class="global_list" v-if="global_list">
      <h3 class="public_title">
        全球榜
        <!-- <i class="iconfont icon-arrow-right-bold arrow_right"></i> -->
      </h3>
      <div class="global_box">
        <ul>
          <li v-for="obj in global_list" :key="obj.id">
            <div class="global_img">
              <Playbtn class="playBtn" />
              <img :src="obj.coverImgUrl" alt="" />
            </div>
            <p class="global_text">{{ obj.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import portionTitle from '../components/portion-title.vue'
import { RankingListAPI, SongListDetailsAPI } from '@/api'
import Playbtn from '@/components/playBtn.vue'
import playFn from '@/utils/play'
export default {
  name: 'RankingList',
  data () {
    return {
      loading: false, // 加载条
      official_list: [], // 官方
      global_list: [], // 全球
      soaringTracks: { trackIds: [] }, // 飙升榜
      newSongTracks: { trackIds: [] }, // 新歌榜
      originalTracks: { trackIds: [] }, // 原创
      hostSongTracks: { trackIds: [] } // 热歌榜
    }
  },
  created () {
    this.getRankingList() // 排行榜
  },
  methods: {
    // 排行榜
    async getRankingList () {
      this.loading = true // 开启加载条
      const {
        data: { list }
      } = await RankingListAPI()
      // 官方排行榜
      this.official_list = list.slice(0, 4) // 截取数组
      // 全球排行榜
      this.global_list = list.slice(4)
      this.getSongListDetails()
    },
    // 排行榜详情
    async getSongListDetails () {
      { const res = await SongListDetailsAPI({
        id: this.official_list[0].id
      })
      const { data: { playlist } } = res
      this.soaringTracks = playlist }

      { const res = await SongListDetailsAPI({
        id: this.official_list[1].id
      })
      const { data: { playlist } } = res
      this.newSongTracks = playlist }

      { const res = await SongListDetailsAPI({
        id: this.official_list[2].id
      })
      const { data: { playlist } } = res
      this.originalTracks = playlist }

      { const res = await SongListDetailsAPI({
        id: this.official_list[3].id
      })
      const { data: { playlist } } = res
      this.hostSongTracks = playlist }
      this.loading = false
      // this.official_list.forEach(async (item, i) => {
      //   const res = await SongListDetailsAPI({
      //     id: this.official_list[i].id
      //   })
      //   const { data: { playlist } } = res
      //   this.officialTracks.push(playlist)
      // })
      // for (let i = 0; i < this.official_list.length; i++) {
      //   const res = await SongListDetailsAPI({
      //     id: this.official_list[i].id
      //   })
      //   const { data: { playlist } } = res
      //   if (i === 0) {
      //     // 飙升榜
      //     this.soaringTracks = playlist
      //   } else if (i === 1) {
      //     // 新歌榜
      //     this.newSongTracks = playlist
      //   } else if (i === 2) {
      //     // 原创
      //     this.originalTracks = playlist
      //   } else {
      //     // 热歌榜
      //     this.hostSongTracks = playlist
      //   }
      // }
    },
    playFn (data) {
      playFn(data)
      console.log(this.soaringTracks.trackIds)
    }

  },
  components: {
    Playbtn,
    portionTitle
  }
}
</script>

<style lang="less" scoped>
.arrow_right {
  font-size: 12px;
  font-weight: normal;
}
.global_box,
.portion_list {
  margin-top: 20px;
}
.public_title {
  font-size: 1rem;
  font-weight: 800;
  color: #d0d0d0;
}
// 官方
.official_list {
  // 图片
  .portion_list {
    display: flex;
    margin-bottom: 28px;
    .portion_img {
      overflow: hidden;
      position: relative;
      width: 172px;
      height: 172px;
      max-width: 172px;
      max-height: 172px;
      background-color: #fff;
      border-radius: 4px;
      .playBtn {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        transform: translate(-50%, -50%);
        transition: all 0.3s;
      }
      &:hover .playBtn {
        opacity: 0.9;
      }
      .updateTime {
        position: absolute;
        top: 67%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

}
// 全球
.global_list {
  .global_box {
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        flex: 16.6666%;
        margin: 0 0.4167rem 0.4167rem 0;
        font-size: .4167rem;
        .global_img {
          position: relative;
          max-width: 210px;
          max-height: 210px;
          min-width: 140px;
          min-height: 140px;
          width: 8.75rem;
          height: 8.75rem;
          border-radius: 0.2083rem;
          overflow: hidden;
          .playBtn {
            opacity: 1;
            position: absolute;
            bottom: 6%;
            right: 6%;
            width: 1.25rem;
            height: 1.25rem;
            transition: all 0.3s;
          }
          &:hover .playBtn {
            opacity: 0.9;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        .global_text {
          max-width: 210px;
          width: 8.75rem;
          padding-top: 0.2917rem;
          font-size: 14px;
          color: #d0d0d0;
        }
      }
    }
  }
}
</style>
