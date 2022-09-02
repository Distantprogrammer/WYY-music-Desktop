<template>
  <div class="footer">
    <div style="height: 3.579rem"></div>
    <div class="wyy_foot">
      <!-- 歌词 -->
      <footerLyric
       v-if="true"
      :scrollAmount="scrollAmount"
      :scrollDelay="scrollDelay"
      :curLyric ='curLyric'
      />
      <div class="details">
        <!-- 音乐图像 -->
        <div class="icon">
          <div class="modal"><i class="iconfont">&#xe687;</i></div>
          <img v-if="imgShow" :src="songInfo.al.picUrl" alt="展示音乐详情页" />
        </div>
        <!-- 音乐名 作者 -->
        <div class="song">
          <div class="name">
            <a href="#">{{ songInfo.name }}</a
            ><i class="iconfont" :class="{ liekactive: true }">&#xeca1;</i>
          </div>
          <div class="author">
            <a
              href="javascript:;"
              v-for="(arr, index) in songInfo.ar"
              :key="arr.id"
              >{{ arr.name
              }}<b v-if="songInfo.ar.length - 1 !== index"> / </b></a
            >
          </div>
        </div>
      </div>
      <!-- 播放设置 -->
      <div class="player" ref="player">
        <ul>
          <li class=""><i class="iconfont">&#xe6b4;</i></li>
          <li class=""><i class="iconfont">&#xe7ef;</i></li>
          <li class="paly" ref="paly" @click.stop="audioStart">
            <!-- 怎样实现其他页面点击播放，切换播放按钮图标
1.监听器是否可以？
2.使用vuex传值过来激活？ -->
            <i class="iconfont">{{ playState ? '&#xe6de;' : '&#xe7c5;' }}</i>
          </li>
          <li class=""><i class="iconfont">&#xe7ef;</i></li>
          <li
            class="word"
            @click="lyricShowFn"
            :style="{ color: lyricShow ? 'red' : 'white' }"
          >
            词
          </li>
        </ul>
        <div class="schedule">
          <span class="start" ref="start">{{ currentTime | transTime }}</span>
          <div
            @click.stop="clickProgressFn($event)"
            @mousedown="mousedownProgressFn($event)"
            ref="progressBar"
            class="progressBar"
          >
            <!-- :style="'width:' + progressBarWidth + '%'" -->
            <div ref="progressBar_background" class="progressBar_background">
              <span class="moveProgress"></span>
            </div>
          </div>
          <span class="end">{{ songInfo.dt || 0 | secondeTime }}</span>
        </div>
        <!-- 播放音乐真正的标签
      看接口文档: 音乐地址需要带id去获取(但是有的歌曲可能404)
      https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e8%8e%b7%e5%8f%96%e9%9f%b3%e4%b9%90-url
     -->
        <!-- loadedmetadata事件为音频/视频文件加载完数据后触发 duration 获取音频的时长，单位为s -->
        <!-- timeupdate 事件是在播放位置改变时触发 currentTime 获得当前播放时间，一般和timeupdate事件联合使用 -->
        <audio

          @loadedmetadata="setTimeFn($event.srcElement.duration)"
          @timeupdate="timeupdateFn($event.srcElement.currentTime)"
          ref="audio"
          preload="true"
          :src="`https://music.163.com/song/media/outer/url?id=${id}.mp3`"
        ></audio>
      </div>
      <!-- 音效 -->
      <div class="acoustics">
        <ul>
          <li class="quality">标准</li>
          <li class="soundEffects"><i class="iconfont">&#xe6b4;</i></li>
          <li class="sound"><i class="iconfont">&#xe6b4;</i></li>
          <li class="share"><i class="iconfont">&#xe6b4;</i></li>
          <li class="playlist"><i class="iconfont">&#xe6b4;</i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getSongByIdAPI, getLyricByIdAPI, RecommendNewMusicAPI } from '@/api'
import { mapState } from 'vuex'
import { getItem, setItem } from '@/utils/storage'
import img from '@/images/logo.jpg'
import footerLyric from './components/footerLyric'
export default {
  name: 'FooterIndex',
  data () {
    return {
      img: img, // 默认图片
      playState: false, // 音乐播放状态(true暂停, false播放)
      songInfo: {}, // 歌曲信息
      id: 1959667345, // 歌曲id
      lyric: {}, // 歌词枚举对象(需要在js拿到歌词写代码处理后, 按照格式保存到这个对象)
      curLyric: '', // 当前显示哪句歌词
      lastLy: '', // 记录当前播放歌词
      totalTime: 0, // 歌曲总时间
      currentTime: 0, // 歌曲播放进度
      progressBarWidth: 0, // 进度条宽度
      firstPlay: false, // 解决第一次播放bug // 可能可以到其他地方调用，但是不管了
      imgShow: false, // 图片资源加载过慢，页面报错
      lyricShow: false, // 歌词显示隐藏
      x: 0, // 歌词的x
      y: 0, // 歌词的y
      scrollAmount: '0', // 滚动速度
      scrollDelay: '0', // 停顿时间
      lyricArrSort: []
    }
  },
  components: {
    footerLyric
  },
  computed: {
    ...mapState(['playMusicMsg'])
  },
  created () {
    this.firstPlay = false
    const than = this
    window.onload = () => {
      if (than.songInfo.al.picUrl) {
        than.imgShow = true
      }
    }
    if (getItem('PLAYMUSICMSG')) {
      this.getSong()
      // this.id = getItem('PLAYMUSICMSG').id

      // console.log(getItem('PLAYMUSICMSG'))
      // console.log(111)
    }
  },
  watch: {
    '$store.state.playMusicMsg': {
      deep: true,
      handler () {
        this.playState = false // 数据过来改变播放按钮状态
        // candisliek  不喜欢  name 歌曲名字  id 歌曲id //播放要传入的id  picUrl // 歌曲图片  song // 歌曲信息
        /**
         * album 唱片
         * alias 别名
         * alartists 艺术家
         */
        // const { candisliek, id, name, picUrl, song } = playMusicMsg
        // this.musicMsg = playMusicMsg
        // console.log(this.params)
        // this.candisliek = candisliek
        // this.name = name
        // this.picUrl = picUrl
        // this.song = song
        // this.id = id
        // console.log(this.firstPlay)
        if (this.playMusicMsg) {
          this.id = this.playMusicMsg
        }

        this.getSong()
        this.showLyric()
      }
      // immediate: true
    }
  },
  mounted () {
    this.showLyric()
  },
  methods: {
    async getSong () {
      // 获取歌曲详情, 和歌词方法
      const res = await getSongByIdAPI(this.id)
      // console.log(res)
      this.songInfo = res.data.songs[0]
      setItem('songInfo', res.data.songs[0])
      // 获取-并调用_formatLyr方法, 处理歌词
      const lyrContent = await getLyricByIdAPI(this.id)
      // console.log(lyrContent)
      const lyricStr = lyrContent.data.lrc.lyric
      this.lyric = this._formatLyr(lyricStr)
      // 初始化完毕先显示零秒歌词
      this.curLyric = this.lyric[0]
      // console.log(this.firstPlay)
      if (this.firstPlay) {
        this.$refs.audio.play()
        this.playState = true
      }
      this.firstPlay = true
    },
    _formatLyr (lyricStr) {
      // 可以看network观察歌词数据是一个大字符串, 进行拆分.
      const reg = /\[.+?\]/g //
      // console.log(lyricStr)
      const timeArr = lyricStr.match(reg) // 匹配所有[]字符串以及里面的一切内容, 返回数组
      // console.log(timeArr); // ["[00:00.000]", "[00:01.000]", ......]
      const contentArr = lyricStr.split(/\[.+?\]/).slice(1) // 按照[]拆分歌词字符串, 返回一个数组(下标为0位置元素不要,后面的留下所以截取)
      // console.log(contentArr)
      const lyricObj = {} // 保存歌词的对象, key是秒, value是显示的歌词
      timeArr.forEach((item, index) => {
        // 拆分[00:00.000]这个格式字符串, 把分钟数字取出, 转换成秒
        const ms = item.split(':')[0].split('')[2] * 60
        // 拆分[00:00.000]这个格式字符串, 把十位的秒拿出来, 如果是0, 去拿下一位数字, 否则直接用2位的值
        const ss =
          item.split(':')[1].split('.')[0].split('')[0] === '0'
            ? item.split(':')[1].split('.')[0].split('')[1]
            : item.split(':')[1].split('.')[0]
        // 秒数作为key, 对应歌词作为value
        lyricObj[ms + Number(ss)] = contentArr[index]
      })
      // 返回得到的歌词对象(可以打印看看)
      // console.log(lyricObj)
      // 把lyric对象的key拿出来进行排序
      // this.lyricArrSort = Object.keys(lyricObj)
      // this.lyricArrSort.sort((a, b) => {
      //   return a - b
      // })
      return lyricObj
    },
    audioStart () {
      if (!this.playState) {
        // 如果状态为false
        // this.scrollAmount = '5'
        this.$refs.audio.play() // 调用audio标签的内置方法play可以继续播放声音
      } else {
        // this.scrollAmount = '0'
        this.$refs.audio.pause() // 暂停audio的播放
        // this.firstPlay = false
      }
      this.playState = !this.playState // 点击设置对立状态
    },
    showLyric () {
      // 监听播放audio进度, 切换歌词显示
      this.$refs.audio.addEventListener('timeupdate', () => {
        const curTime = Math.floor(this.$refs.audio.currentTime)
        // 避免空白出现
        if (this.lyric[curTime]) {
          this.curLyric = this.lyric[curTime]
          this.lastLy = this.curLyric
        } else {
          this.curLyric = this.lastLy
        }
      })
    },
    async NewMusic () {
      try {
        const { data } = await RecommendNewMusicAPI({
          limit: 6
        })
        this.newSongLIst = data.result
      } catch (error) {
        console.log(error)
      }
    },
    // 音乐总时长
    setTimeFn (duration) {
      this.totalTime = duration
    },
    // 监听音频播放时间并更新进度条
    timeupdateFn (currentTime) {
      this.currentTime = currentTime
      this.$nextTick(() => {
        const value = Math.round(
          (Math.floor(currentTime) / Math.floor(this.totalTime)) * 100, 0) // 当前时间/总长 再乘以一个100变成百分数
        this.progressBarWidth = value // 使用style添加width
        const progressBar = this.$refs.progressBar_background
        progressBar.style.width = value + '%'
      })
    },
    // 点击进度条
    clickProgressFn (e) {
      this.positioning(e.offsetX)
    },
    // 滑动进度条
    // 鼠标按下
    mousedownProgressFn (e) {
      const progressBar = this.$refs.progressBar
      document.documentElement.addEventListener('mouseup', () => {
        progressBar.removeEventListener('mousemove', this.moving)
      })
      progressBar.addEventListener('mousemove', this.moving)
      document.documentElement.addEventListener('mouseup', () => {
        progressBar.removeEventListener('mousemove', this.moving)
      })
    },
    moving (e) {
      const progressBarBox = this.$refs.progressBar
      const progressBar = this.$refs.progressBar_background
      // 判断鼠标移动位置是否已经超出了box的范围，从而设置滑块的进度
      if (e.clientX <= progressBarBox.offsetLeft) {
        progressBar.style.width = e.clientX + 'px'
      }
      this.positioning(e.offsetX)
    },
    // 宽度转化时间 封装复用函数
    positioning (val) {
      const audio = this.$refs.audio
      const progressBarBox = this.$refs.progressBar
      const rate = val / progressBarBox.scrollWidth
      audio.currentTime = audio.duration * rate
      // this.timeupdateFn(audio.duration * rate)
    },
    lyricShowFn () {
      this.lyricShow = !this.lyricShow
    }
    // 过滤器 现在还没用
    // transTime (time) {
    //   const duration = parseInt(time)
    //   let minute = parseInt(duration / 60)
    //   let sec = (duration % 60) + ''
    //   const isM0 = ':'
    //   if (minute === 0) {
    //     minute = '00'
    //   } else if (minute < 10) {
    //     minute = '0' + minute
    //   }
    //   if (sec.length === 1) {
    //     sec = '0' + sec
    //   }
    //   return minute + isM0 + sec
    // }
  }
}
</script>

<style lang="less" scoped>
.wyy_foot {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.579rem;
  margin: 0 auto;
  background-color: #202023;
  cursor: pointer;
  .details {
    min-width: 160px;
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;

    .icon {
      position: relative;
      margin-left: 0.656rem;

      .modal,
      img {
        width: 2.186rem;
        height: 2.186rem;
        border-radius: 0.182rem;
      }

      .modal {
        position: absolute;
        text-align: center;
        line-height: 2.186rem;
        background-color: rgb(132, 68, 79);
        transition: all 0.2s;
        opacity: 0;

        &:hover {
          color: #ccc;
          opacity: 0.7;
        }
      }

      // img{
      // }
    }

    .song {
      margin-left: 0.364rem;

      .name {
        font-size: 0.656rem;

        a {
          color: #fff;
        }

        i {
          color: #f4f4f4;
          margin-left: 0.182rem;
          font-size: 0.729rem;
        }
      }

      .author {
        font-size: 0.546rem;

        a {
          color: #fff;
        }
      }
    }
  }

  .player {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 0.729rem 0;

    ul {
      display: flex;
      margin: 0 auto;

      // justify-content: center;
      li {
        line-height: 1.457rem;
        margin: 0 0.801rem;

        i {
          color: #fff;
          font-size: 0.801rem;
        }
      }

      .paly {
        width: 1.457rem;
        height: 1.457rem;
        background-color: #29292c;
        border-radius: 50%;
        text-align: center;

        i {
          display: inline-block;
          margin: 0.036rem 0 0 0.036rem;
        }
      }

      .word {
        color: #fff;
        font-size: 0.729rem;
      }
    }

    .schedule {
      display: flex;
      align-items: center;
      margin: 0 auto;

      span {
        color: #d8d8d8;
        font-size: 0.51rem;
        letter-spacing: 0.036rem;
      }

      .progressBar {
        width: 16.393rem;
        height: 0.182rem;
        height: 0.3333rem; // 改
        border-radius: 0.036rem;
        margin: 0 0.82rem;
        background-color: #cdcdcd;
        transition: all 0.2s;
        .progressBar_background {
          pointer-events: none;
          position: relative;
          max-width: 100%;
          width: 0;
          height: 100%;
          background-color: red;
          .moveProgress {
            pointer-events: none;
            opacity: 0;
            position: absolute;
            top: -0.087rem;
            right: -0.3917rem;
            bottom: 0;
            /* transform: translate(50%, -24%); */
            background-color: red;
            border-radius: 50%;
            width: 0.5167rem;
            height: 0.5167rem;
            min-width: 5px;
            min-height: 5px;
          }
        }
        &:hover {
          height: 0.4167rem;
          .moveProgress {
            opacity: 1;
          }
        }
      }
    }
  }

  .acoustics {
    min-width: 210px;
    flex: 1;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.093rem 0 5.464rem;

      li {
        i {
          color: #fff;
          font-size: 0.801rem;
        }
      }

      .quality {
        color: #ec4141;
        font-size: 0.583rem;
        border: 1px #ec4141 solid;
        padding: 0 0.173rem;
        line-height: 0.729rem;
        border-radius: 0.123rem;
      }
    }
  }
  .liekactive {
    color: red !important;
  }
}
</style>
