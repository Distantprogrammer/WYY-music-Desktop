<template>
  <div class="main">
    <div ref="wyy_main" class="wyy_main">
      <!-- 侧边栏 -->
      <MainLeft></MainLeft>
      <div class="main_right">
        <router-view />

        <!-- 导航栏
        <MainNav></MainNav> -->
        <!-- 清除固定定位
        <div class="main_clear_nav"></div> -->
        <!-- 路由位置 -->
        <!-- <div class="wapper_width">
          <div class="main_wapper">
            <router-view></router-view>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import MainLeft from '@/views/Main/main-left/index.vue'
// import MainRight from '@/views/Main/main-right/index.vue'
export default {
  name: 'MainIndex',
  data () {
    return {
      activeName: 'second'
    }
  },
  components: {
    MainLeft
    // MainRight
  },
  created () {
    this.$nextTick(() => {
      const MainScroll = this.$refs.wyy_main
      const html = document.documentElement // 获取html
      const WyyTop = document.querySelector('.wyy_top')
      const WyyFoot = document.querySelector('.wyy_foot')
      function getHeight () {
        // 实时更改 滚动条的高度
        const height =
          html.clientHeight - WyyTop.clientHeight - WyyFoot.clientHeight + 2
        MainScroll.style.height = height + 'px'
      }
      // 获取宽度
      window.addEventListener('resize', getHeight)
      getHeight()
    })
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
  // height: 100%;
  display: flex;
  background-color: #2b2b2b;
  .main_right {
    height: 100%;
    // overflow-y: auto;
    flex: 5;
    // width: 100% - 10.107rem;
    background-color: #2b2b2b;
    // padding: 0 30px;
    // &::-webkit-scrollbar {
    //   /*滚动条整体样式*/
    //   width: 5px;
    //   /*高宽分别对应横竖滚动条的尺寸*/
    //   // height: 5px;
    // }
    // &::-webkit-scrollbar-thumb {
    //   /*滚动条里面小方块*/
    //   border-radius: 10px;
    //   // box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    //   background: #e2dcdc;
    // }
  }
}
</style>
