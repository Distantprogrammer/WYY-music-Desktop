<template>
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
      <el-menu-item index="3" :route="{ name: 'songList' }">歌单</el-menu-item>
      <el-menu-item index="4" :route="{ name: 'rankingList' }"
        >排行榜</el-menu-item
      >
      <el-menu-item index="5" :route="{ name: 'singer' }">歌手</el-menu-item>
      <el-menu-item index="6" :route="{ name: 'latestMusic' }"
        >最新音乐</el-menu-item
      >
    </el-menu>
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
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
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
</style>
