<template>
  <!-- 导航栏 -->
  <div class="main_nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">个性推荐</el-menu-item>
      <el-menu-item index="2">专属定制</el-menu-item>
      <el-menu-item index="3">歌单</el-menu-item>
      <el-menu-item index="4">排行榜</el-menu-item>
      <el-menu-item index="5">歌手</el-menu-item>
      <el-menu-item index="6">最新音乐</el-menu-item>
    </el-menu>
    <div class="line"></div>
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
  height: 3.3333rem;
  z-index: 10;
  background-color: #2b2b2b;
}
</style>
