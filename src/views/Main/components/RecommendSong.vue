<template>
  <!-- 个人推荐 -->
  <div class="wapper_width">
    <div class="main_wapper">
      <!-- 轮播图 -->
      <div class="main_slideshow">
        <el-carousel :interval="4000" type="card" height="200px" id="el">
          <el-carousel-item v-for="item in 6" :key="item">
            <a href="javascrip:;">
              <img
                src="https://p1.music.126.net/OTSRvD0r8s0dmRrS752JBA==/109951167775152845.jpg?imageView&quality=89"
                alt=""
              />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 歌单 -->
      <div class="main_song_list">
        <!-- 推荐 -->
        <div class="recommend">
          <h3 class="playlist_title">推荐歌单</h3>
          <div class="recommend_table">
            <ul>
              <!-- 上5 -->
              <li v-for="item in SongList" :key="item.id">
                <div class="daily_push">
                  <el-image :src="item.picUrl" :lazy="true"></el-image>
                  <!-- <img :src="item.picUrl" alt="" /> -->
                </div>
                <p class="playlist_introduced">{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 无接口改为最新音乐 -->
        <!-- 播客 -->
        <div class="recommend">
          <h3 class="playlist_title">最新音乐</h3>
          <div class="podcast_table">
            <ul>
              <li v-for="obj in newSongLIst" :key="obj.id">
                <div class="podcast_img">
                  <img :src="obj.picUrl" alt="" />
                </div>
                <!-- 文字 -->
                <div class="song_msg">
                  <h4 class="song_name">{{ obj.name }}</h4>
                  <p class="song_type"><span>{{obj.song.album.subType}}</span></p>
                  <div class="song_else">
                    <span class="song_author"> {{ obj.song.artists[0].name }} </span>
                    <span class="song_host">
                      <i class="iconfont">&#xe7c5;</i>
                      <span>{{obj.song.album.pic}}万</span>
                    </span>
                    <span class="song_time">
                      <i class="iconfont time">&#xe601;</i>
                      {{ obj.song.album.publishTime | secondeTime }}
                    </span>
                  </div>
                </div>
              </li>
              <!-- 接口循环 -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RecommendThePlayListAPI, RecommendNewMusicAPI } from '@/api/index' // 测试接口
export default {
  name: 'MainIndex',
  data () {
    return {
      SongList: [], // 推荐歌单数据
      newSongLIst: [] // 最新音乐
    }
  },
  created () {
    this.recommendSong() // 推荐歌单
    this.NewMusic(10)
  },
  methods: {
    // 推荐歌单
    async recommendSong () {
      const { data } = await RecommendThePlayListAPI()
      try {
        this.SongList = data.result
      } catch (error) {
        console.log(error)
      }
    },
    async NewMusic (num) {
      const { data } = await RecommendNewMusicAPI(num)
      console.log(data)
      this.newSongLIst = data.result
    }
  }
}
</script>

<style lang="less" scoped>
// 设置主题内容布局
.wapper_width {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px;
    /*高宽分别对应横竖滚动条的尺寸*/
    // height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    // box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #e2dcdc;
  }
  .main_wapper {
    padding: 0 1vw;
    margin: 0 auto;
    width: 100%;
    min-width: 1050px;
    max-width: 1120px;
    //轮播图
    /depp/ .main_slideshow {
      // max-width: 1000px;
      // margin: 0 auto;
      .el-carousel__item {
        &:nth-child(2n) {
          background-color: #99a9bf;
        }
        &:nth-child(2n + 1) {
          background-color: #d3dce6;
        }
        #el {
          .el-carousel__button {
            width: 10px;
            height: 5px;
            border-radius: 50%;
            background-color: #ec4141;
          }
        }
      }
      a {
        display: block;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
        // height: 200px;
        // background: url() no-repeat;
        // background-size: 100% 100%;
        // &:nth-child(2) {
        //   background: url() no-repeat;
        // }
      }
    }
    // 推荐歌单
    .main_song_list {
      height: 10000px;
      width: 100%;
      margin: 0 auto;
      //标题
      .playlist_title {
        margin-bottom: 0.625rem;
        font-weight: 800;
        font-size: 24px;
        color: #fff;
      }
      .recommend {
        color: #fff; // 测试
        // 内容
        .recommend_table {
          // display: flex;
          // flex-direction: column;
          ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li {
              flex: 16.6666%;
              // float: left;
              width: 200px;
              margin: 0 0.4167rem 0.4167rem 0.4167rem;
              &:nth-child(6n),
              &:first-child {
                margin-left: 0;
              }
              &:nth-child(5n),
              &:last-child {
                margin-right: 0;
              }
              // 图片
              div {
                width: 100%;
                height: 200px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }

              // 文字
              .playlist_introduced {
                color: #fff;
                padding: 10px;
                font-size: 14px;
              }
            }
          }
        }
      }
      .podcast_table {
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            flex: 50%;
            display: flex;
            margin-bottom: 0.6667rem;
            align-items: center;
            .podcast_img {
              margin-right: 0.3333rem;
              width: 3.125rem;
              height: 3.125rem;
              border-radius: 0.1667rem;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .song_msg {
              * {
                color: #727272;
                padding-bottom: 2px;
              }
              .song_name {
                color: #fff;
                font-size: 14px;
              }
              .song_type {
                span {
                  border: 1px solid #3c3c3c;
                }
              }
              .song_else {
                display: flex;
                justify-content: center;
                & > span {
                  padding-left: 2px;
                }
                .song_host {
                  .time {
                    font-size: 0.5833rem !important;
                  }
                }
              }
              // letter-spacing:0.5px
            }
          }
        }
      }
    }
  }
}
</style>
