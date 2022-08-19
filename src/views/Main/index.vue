<template>
  <div class="main">
    <div class="wyy_main">
      <!-- 侧边栏 -->
      <SideBar></SideBar>
      <div class="main_right">
        <!-- 导航栏 -->
        <MainNav></MainNav>
        <!-- 清除固定定位 -->
        <div class="main_clear_nav"></div>
        <!-- 路由位置 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/views/SideBar/index.vue'
import MainNav from '@/views/Main/MainNav.vue'
export default {
  name: 'MainIndex',
  data () {
    return {
      activeName: 'second'
    }
  },
  components: {
    SideBar,
    MainNav
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less" scoped>
.wyy_main {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #2b2b2b;
  .main_right {
    // overflow-y: auto;
    flex: 5;
    // width: 100% - 10.107rem;
    background-color: #2b2b2b;
    // padding: 0 30px;
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
    .main_clear_nav {
      margin-top: 80px;
    }
  }
}
</style>
