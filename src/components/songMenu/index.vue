<template>
  <div class="songMenu_table">
    <ul>
      <li v-for="item in topPlaylist" :key="item.id">
        <div class="msgBox">
          <div class="view_counts">
            <i class="iconfont icon-24gl-play"></i>
            {{ item.playCount | numberFormat }}
          </div>
          <playBtn class="playBtn" @click.native="listPlay(item.id)" />
          <img :src="item.coverImgUrl" @click="songList(item.id)" />
          <div class="author">
            <i class="iconfont icon-24gl-play"></i>
            {{ item.creator.description }}
          </div>
        </div>
        <p class="playlist_introduced">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { playlistTrackAPI } from '@/api/index'
import songList from '@/utils/songList'
import playFn from '@/utils/play'
export default {
  name: 'songMenu',
  props: {
    topPlaylist: {
      type: [Array, Object]
    }
  },
  data () {
    return {

    }
  },
  methods: {
    playFn (data) {
      playFn(data)
      // console.log(12, id)
      // this.$store.commit('delIdMusic')
    },
    songList (data) {
      songList(data)
    },
    // 播放所有歌曲
    async listPlay (id) {
      const { data } = await playlistTrackAPI({
        id,
        // limit: 20,
        offset: 0
      })
      playFn(data.songs)
    }

  }
}
</script>

<style lang="less" scoped>
.songMenu_table {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      flex: 16.6666%;
      // float: left;
      width: 8.3333rem;
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
      .msgBox {
        border-radius: 5px;
        overflow: hidden;
        width: 100%;
        height: 200px;
        position: relative;
        font-size: 11px;
        .view_counts,
        .author {
          position: absolute;
          color: #fff;
          font-size: 13px;
        }
        .view_counts {
          top: 5%;
          right: 5%;
        }
        .author {
          bottom: 5%;
          left: 5%;
        }
        .playBtn {
          opacity: 0;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40px;
          height: 40px;
          transform: translate(-50%, -50%);
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

      // 文字
      .playlist_introduced {
        color: @fontsize;
        padding: 10px;
        font-size: 14px;
        vertical-align: middle;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
