<template>
  <div class="rankingList">
    <!-- 官方榜 -->
    <div class="official_list" v-if=" official_list">
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
        <div class="portion_img">
          <Playbtn class="playBtn" />
          <span class="updateTime"
            >{{ obj.updateTime | monthTime('MM月DD日') }}更新</span
          >
          <img :src="obj.coverImgUrl" alt="" />
        </div>
        <div class="portion_title">
          <ul>
            <!-- 这里使用了双重for循环 -->
            <li class="clearfix" v-for="(obj,i) in 5" :key="i" @dblclick="playFn()">
              <!-- <div>{{ i }}</div> -->
              <div class="portion_titlt_box">
                <span class="if_bigthree">{{ i+1}}</span>
                <span class="else_smthree" v-if="officialTracks[index].ToplistType==='S'">{{ officialTracks[index].trackIds[i].ratio}}%</span>
                <span class="else_smthree" style="color:red; font-size: 5px;" v-if="officialTracks[index].ToplistType==='O'">NEW</span>
                <span class="else_smthree" v-if="officialTracks[index].ToplistType==='N'">-</span>
                <span class="else_smthree" v-if="officialTracks[index].ToplistType==='H'">-</span>
                <span style="color: #ddd"
                  >{{officialTracks[index].tracks[i].name}} &nbsp;<span v-if="officialTracks[index].tracks[i].alia[0]" class="else_smthree"
                    >({{ officialTracks[index].tracks[i].alia[0] }})</span
                  >
                </span>
                <span class="title_rigth">{{officialTracks[index].tracks[i].ar[0].name}}</span>
              </div>
            </li>
            <li>
              查看全部
              <i class="iconfont icon-arrow-right-bold arrow_right"></i>
            </li>
          </ul>
        </div>
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
import { RankingListAPI, SongListDetailsAPI } from '@/api'
import Playbtn from '@/components/playBtn.vue'
import playFn from '@/utils/play'
export default {
  name: 'RankingList',
  data () {
    return {
      official_list: [], // 官方
      global_list: [], // 全球
      officialTracks: [
        // // eslint-disable-next-line no-undef
        // soaringTracks, // 飙升榜
        // // eslint-disable-next-line no-undef
        // newSongTracks, // 新歌榜
        // // eslint-disable-next-line no-undef
        // originalTracks, // 原创
        // // eslint-disable-next-line no-undef
        // hostSongTracks // 热歌榜
      ]
    }
  },
  created () {
    this.getRankingList() // 排行榜
  },
  methods: {
    // 排行榜
    async getRankingList () {
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
      this.officialTracks.push(playlist) }

      { const res = await SongListDetailsAPI({
        id: this.official_list[1].id
      })
      const { data: { playlist } } = res
      this.officialTracks.push(playlist) }

      { const res = await SongListDetailsAPI({
        id: this.official_list[2].id
      })
      const { data: { playlist } } = res
      this.officialTracks.push(playlist) }

      { const res = await SongListDetailsAPI({
        id: this.official_list[3].id
      })
      const { data: { playlist } } = res
      this.officialTracks.push(playlist) }
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
      console.log(this.officialTracks[0])
    }

  },
  components: {
    Playbtn
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
  //内容
  .portion_title {
    flex: 1;
    ul {
      margin-left: 30px;
      li {
        height: 35px;
        line-height: 35px;
        border-radius: 2px;
        color: #000;
        font-weight: 600;
        &:nth-child(2n-1) {
          background-color: #2f2f2f;
        }
        &:hover {
          background-color: #333;
        }
        .portion_titlt_box {
          padding: 0 14px;
          // 大于三的显示的颜色
          .if_bigthree {
            color: red;
          }
          .else_smthree {
            color: #7a7e80;
          }
          // 小于三显示的颜色
          & > span {
            padding: 0 8px;
          }
          .title_rigth {
            float: right;
          }
        }
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
