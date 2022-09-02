<template>
  <div class="foundm_music">
    <!-- 导航栏 -->
    <div class="main_nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="1" :route="{ name: 'recommendSong' }"
          >个性推荐</el-menu-item
        >
        <el-menu-item index="2" :route="{ name: 'exclusiveCustomization' }"
          >专属定制</el-menu-item
        >
        <el-menu-item index="3" :route="{ name: 'songList' }"
          >歌单</el-menu-item
        >
        <el-menu-item index="4" :route="{ name: 'rankingList' }"
          >排行榜</el-menu-item
        >
        <el-menu-item index="5" :route="{ name: 'singer' }">歌手</el-menu-item>
        <el-menu-item index="6" :route="{ name: 'latestMusic' }"
          >最新音乐</el-menu-item
        >
      </el-menu>
    </div>
    <!-- 清除固定定位 -->
    <div class="main_clear_nav"></div>
    <!-- 内容区域 -->
    <div class="wapper_width">
      <div class="main_wapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainNavIndex',
  data () {
    return {
      activeIndex: '1'
    }
  },
  updated () {
    // console.log(this.$route.query.id)
    this.activeIndex = this.$route.query.id// 左侧侧边栏激活右侧导航栏初始化
  },
  // computed: {
  //   activeIndex () {
  //     // let id = '1'
  //     // id = this.$route.query.id ?
  //     return this.$route.query.id
  //   }
  // },
  watch: {},
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      // this.activeIndex = key
    }
  }
}
</script>

<style lang="less" scoped>
.main_nav {
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 2;
  background-color: #2b2b2b;
  /deep/ .el-menu-demo {
    background-color: transparent;
    font-size: 0.75rem;
    color: #afafaf;
    .is-active {
      font-size: 1rem;
      font-weight: 800;
      color: #fff;
    }
  }
  .el-menu.el-menu--horizontal {
    border: none;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 5px solid #ec4141;
  }
}
.foundm_music {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
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
    // overflow: hidden;
    // height: 100%;
    width: 100%;
    min-width: 1050px;
    max-width: 1120px;
    margin-bottom: 12.579rem;
  }
}
.main_clear_nav {
  height: 80px;
}
</style>
