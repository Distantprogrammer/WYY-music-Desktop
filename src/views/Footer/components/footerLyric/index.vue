<template>
  <div class="footer_lyric" ref="footer_lyric" @mousedown.stop.prevent="mousedownFn($event)">
    <div class="footer_lyric_btn">
      <span><i class="iconfont icon-yinle"></i></span>
      <span><i class="iconfont icon-kuaitui"></i></span>
      <span><i class="iconfont icon-ai-rew-right"></i></span>
      <span><i class="iconfont icon-shangyishou"></i></span>
      <span><i class="iconfont icon-bofang"></i></span>
      <span><i class="iconfont icon-xiayishou"></i></span>
      <span><i class="iconfont icon-shezhi"></i></span>
      <span><i class="iconfont icon-suoding"></i></span>
      <span><i class="iconfont icon-close-bold"></i></span>
    </div>
    <p>
      <marquee
        ref="marquee"
        :scrollAmount="scrollAmount"
        :scrollDelay="scrollDelay"
        direction="left"
        width="100"
      >
        {{ curLyric }}</marquee
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'footerLyric',
  props: {
    scrollAmount: {
      type: [String, Number]
    },
    scrollDelay: {
      type: [String, Number]
    },
    curLyric: {
      type: [String]
    }
  },
  computed: {
    // marquee: {
    //   get () {
    //     return this.$refs.marquee.clientWidth
    //   }
    // }
  },
  methods: {
    // // 计算歌词位置获取当前索引
    // const index = this.lyricArrSort.findIndex((item) => {
    //   return Number(item) === Math.floor(currentTime)
    // })
    // if (index > -1) {
    //   // 计算滚动时间
    //   this.scrollDelay = this.lyricArrSort[index + 1] - this.lyricArrSort[index]
    //   // 计算滚动速度
    //   this.scrollAmount = this.marquee / (this.scrollDelay * 10)
    // }
    // console.log(currentTime)
    // 歌词拖拽
    mousedownFn (e) {
      const footerLyric = this.$refs.footer_lyric
      const x = e.pageX - footerLyric.offsetLeft
      const y = e.pageY - footerLyric.offsetTop
      // 移动的时候，把鼠标在页面中的坐标，减去鼠标在盒子内的坐标就是模态框的left和top值
      document.onmousemove = function move (e) {
        console.log(e.pageX - x)
        footerLyric.style.left = e.pageX - x + 'px'
        footerLyric.style.top = e.pageY - y + 'px'
      }
      // 鼠标移动事件移除
      document.onmouseup = function () {
        document.onmousemove = null
      }
    }
  }
}
</script>

<style lang="less" scoped>
.footer_lyric {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: -100px;
  left: 100px;
  width: 25.6667rem;
  height: 4.875rem;
  font-size: 1.0167rem;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #eeeeee;
  background-color: rgba(27, 25, 25, 0.4);
  .footer_lyric_btn {
    span {
      margin: 0 0.325rem;
    }
  }

  p {
    width: 100%;
    marquee {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
