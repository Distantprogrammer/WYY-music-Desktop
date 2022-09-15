<template>
  <div class="songMenu">
    <div class="BoutiquePlaylist">
      <img src="@/images/logo.jpg" alt="" />
      <div>
        <el-button round>
          <i class="iconfont icon-jingpin"></i> 精品歌单
        </el-button>
        <h2>按时给法官是否该i</h2>
      </div>
    </div>
    <div class="songMenuNavBar">
      <el-button round size="mini"
        >{{ activeName }} <i class="el-icon-arrow-right"></i
      ></el-button>
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
        <el-tab-pane :label="item.name" :name="item.name" v-for="item in playlistHot" :key="item.id" @click="gettopPlaylist"></el-tab-pane>
      </el-tabs>
    </div>
    <songMenu v-if="topPlaylist" :topPlaylist ="topPlaylist"/>
  </div>
</template>

<script>
import { playlistHotAPI, topPlaylistAPI } from '@/api'
import songMenu from '@/components/songMenu'
export default {
  name: 'songMenuIndex',
  components: {
    songMenu
  },
  data () {
    return {
      activeName: '华语', // tab 选中项
      playlistHot: '', // 热门歌单
      topPlaylist: '' // 歌单标签
    }
  },
  created () {
    this.getplaylistHot()
    this.gettopPlaylist()
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    async getplaylistHot () {
      try {
        const { data: { tags } } = await playlistHotAPI()
        this.playlistHot = tags
      } catch (error) {
        this.$message.error('请求数据失败')
      }
    },
    async gettopPlaylist () {
      const { data: { playlists } } = await topPlaylistAPI({
        cat: this.activeName,
        limit: 50,
        offset: 0
      })
      this.topPlaylist = playlists
    }

  }
}
</script>

<style lang="less" scoped>
.songMenu {
  .BoutiquePlaylist {
    width: 100%;
    height: 6.2917rem;
    margin-bottom: 20px;
    background-image: linear-gradient(
      to right,
      rgb(194, 111, 111),
      rgb(121, 114, 100),
      rgb(61, 61, 31),
      rgb(175, 92, 53),
      rgb(175, 155, 175)
    );
    border-radius: 5px;
    display: flex;
    align-items: center;
    img {
      padding: 15px;
      height: 100%;
      border-radius: 5px;
    }
    div {
      .el-button {
        width: 100px;
        height: 30px;
        background-color: transparent;
        padding: 0;
        color: @navBar;
        font-size: 14px;
        margin-bottom: 10px;
        border: #e7aa5a 1px solid;
        color: #e7aa5a;
        .icon-jingpin {
          color: #e7aa5a;
        }
      }
      h2 {
        margin-top: 10px;
        color: #fff;
      }
    }
  }

  .songMenuNavBar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .el-button {
      width: 100px;
      height: 30px;
      background-color: transparent;
      padding: 0;
      color: @navBar;
      font-size: 14px;
    }
    .el-tabs {
      width: 600px;
      /*去掉tabs底部的下划线*/
      /deep/.el-tabs__nav-wrap::after {
        position: static !important;
      }
      /deep/.el-tabs__nav {
        color: @fontsize;
        /*去掉切换时el-tab-pane底部的蓝色下划线*/
        .el-tabs__active-bar {
          background-color: transparent !important;
        }

        .el-tabs__item {
          padding: 0;
          color: @fontsize;
        }
        .is-active {
          color: red;
        }
      }
    }
  }
}
</style>
