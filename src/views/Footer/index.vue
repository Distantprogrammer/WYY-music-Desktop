<template>
  <div class="footer">
    <div style="height: 3.579rem"></div>
    <div class="wyy_foot">
      <div class="details">
        <!-- 音乐图像 -->
        <div class="icon">
          <div class="modal"><i class="iconfont">&#xe687;</i></div>
          <img :src="params.picUrl" alt="展示音乐详情页" />
        </div>
        <!-- 音乐名 作者 -->
        <div class="song">
          <div class="name">
            <a href="#">{{ params.name }}</a
            ><i class="iconfont" :class="{ liekactive: !params.canDislike }"
              >&#xeca1;</i
            >
          </div>
          <div class="author">
            <a
              href="javascript:;"
              v-for="(arr, index) in params.song.artists"
              :key="arr.id"
              >{{ arr.name
              }}<b v-if="params.song.artists.length - 1 !== index"> / </b></a
            >
          </div>
        </div>
      </div>
      <!-- 播放设置 -->
      <div class="player">
        <ul>
          <li class=""><i class="iconfont">&#xe6b4;</i></li>
          <li class=""><i class="iconfont">&#xe7ef;</i></li>
          <li class="paly" @click="audioStart">
            <!-- 怎样实现其他页面点击播放，切换播放按钮图标
1.监听器是否可以？
2.使用vuex传值过来激活？ -->
            <i class="iconfont">{{ playState ? '&#xe6de;' : '&#xe7c5;' }}</i>
          </li>
          <li class=""><i class="iconfont">&#xe7ef;</i></li>
          <li class="word">词</li>
        </ul>
        <div class="schedule">
          <span class="start" ref="start">{{ currentTime | transTime }}</span>
          <!-- @click="clickProgressFn($event)"⬇ -->
          <div
            ref="progressBar"
            class="progressBar"
          >
            <!-- :style="'width:' + progressBarWidth + '%'" -->
            <div ref="progressBar_background" class="progressBar_background">
              <span
                @mousedown.prevent="moveProgressFn($event)"
                class="moveProgress"
              ></span>
            </div>
          </div>
          <span class="end">{{ totalTime | transTime }}</span>
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
          :src="`https://music.163.com/song/media/outer/url?id=${params.id}.mp3`"
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
export default {
  name: 'FooterIndex',
  data () {
    return {
      playState: false, // 音乐播放状态(true暂停, false播放)
      songInfo: {}, // 歌曲信息
      lyric: {}, // 歌词枚举对象(需要在js拿到歌词写代码处理后, 按照格式保存到这个对象)
      curLyric: '', // 当前显示哪句歌词
      lastLy: '', // 记录当前播放歌词
      totalTime: 0, // 歌曲总时间
      currentTime: 0, // 歌曲播放进度
      progressBarWidth: 0, // 进度条宽度
      firstPlay: true // 解决第一次播放bug // 可能可以到其他地方调用，但是不管了
      // playbtn: false
      // musicMsg: {
      //   id: '', // 上一页传过来的音乐id
      //   candisliek: '', // 不喜欢
      //   name: '', // 歌曲名字
      //   picUrl: '', // 歌曲图片
      //   song: '' // 歌曲信息
      // }
    }
  },
  computed: {
    ...mapState(['playMusicMsg']),
    params () {
      // const { album, alias, alartists } = song
      // this.alartistsmsg = {
      //   album,
      //   alias,
      //   alartists
      // }
      // this.id = id
      return this.playMusicMsg
    }
  },
  watch: {
    params: {
      deep: true,
      handler (playMusicMsg) {
        this.playState = true // 数据过来改变播放按钮状态
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
        this.getSong()
        this.showLyric()
      }
      // immediate: true
    }
  },
  created () {},
  mounted () {},
  methods: {
    async getSong () {
      // 获取歌曲详情, 和歌词方法
      const res = await getSongByIdAPI(this.playMusicMsg.id)
      // console.log(res)
      this.songInfo = res.data.songs[0]
      // 获取-并调用_formatLyr方法, 处理歌词
      const lyrContent = await getLyricByIdAPI(this.playMusicMsg.id)
      // console.log(lyrContent)
      const lyricStr = lyrContent.data.lrc.lyric
      this.lyric = this._formatLyr(lyricStr)
      // 初始化完毕先显示零秒歌词
      this.curLyric = this.lyric[0]
      if (this.firstPlay) {
        this.$refs.audio.play()
        console.log(111)
        this.firstPlay = false
      }
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
      // console.log(lyricObj);
      return lyricObj
    },
    audioStart () {
      // console.log(this.id)
      // // 播放按钮 - 点击事件
      // if (this.id) {
      //   try {
      //     this.$refs.audio.play() // 调用audio标签的内置方法play可以继续播放声音
      //     if (!this.playState) {
      //       this.$refs.audio.pause() // 暂停audio的播放
      //       this.playState = !this.playState // 点击设置对立状态
      //     }
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
      if (!this.playState) {
        // 如果状态为false
        this.$refs.audio.play() // 调用audio标签的内置方法play可以继续播放声音
      } else {
        this.$refs.audio.pause() // 暂停audio的播放
      }
      this.playState = !this.playState // 点击设置对立状态
    },
    showLyric () {
      // // 监听播放audio进度, 切换歌词显示
      // this.$refs.audio.addEventListener('timeupdate', () => {
      //   const curTime = Math.floor(this.$refs.audio.currentTime)
      //   // 避免空白出现
      //   if (this.lyric[curTime]) {
      //     this.curLyric = this.lyric[curTime]
      //     this.lastLy = this.curLyric
      //   } else {
      //     this.curLyric = this.lastLy
      //   }
      // })
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
      // console.log('时间', currentTime)
      this.currentTime = currentTime
      this.$nextTick(() => {
        const value = Math.round(
          (Math.floor(currentTime) / Math.floor(this.totalTime)) * 100,
          0
        ) // 当前时间/总长 再乘以一个100变成百分数
        this.progressBarWidth = value // 使用style添加width

        const progressBar = this.$refs.progressBar_background
        progressBar.style.width = value + '%'
      })
    },
    // 点击进度条
    // clickProgressFn (e) {
    //   const audio = this.$refs.audio
    //   const progressBarBox = this.$refs.progressBar
    //   const progressBarBoxPwidth = progressBarBox.scrollWidth // 获取进度条大盒子的宽度
    //   const rate =
    //     (e.offsetX - (progressBarBoxPwidth - progressBarBoxPwidth) / 2) /
    //     progressBarBoxPwidth

    //   audio.currentTime = audio.duration * rate
    //   this.timeupdateFn(audio.duration * rate)
    // },
    // 滑动进度条
    moveProgressFn (e) {
      // console.log(e)
      // const audio = this.$refs.audio
      // const progressBarBox = this.$refs.progressBar
      // const progressBarBoxPwidth = progressBarBox.scrollWidth // 获取进度条大盒子的宽度
      // const progressBar = this.$refs.progressBar_background
      // progressBar.style.width = e.offsetX + 'px'
      // const rate =
      //   (e.offsetX - (progressBarBoxPwidth - progressBarBoxPwidth) / 2) /
      //   progressBarBoxPwidth
      // audio.currentTime = audio.duration * rate
      // this.timeupdateFn(audio.duration * rate)
    },
    // 过滤器 现在还没用
    transTime (tiem) {
      const duration = parseInt(tiem)
      let minute = parseInt(duration / 60)
      let sec = (duration % 60) + ''
      const isM0 = ':'
      if (minute === 0) {
        minute = '00'
      } else if (minute < 10) {
        minute = '0' + minute
      }
      if (sec.length === 1) {
        sec = '0' + sec
      }
      return minute + isM0 + sec
    }
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
        margin: 0 0.282rem;
        background-color: #cdcdcd;
        transition: all 0.2s;
        .progressBar_background {
          position: relative;
          max-width: 100%;
          width: 0;
          height: 100%;
          background-color: red;
          .moveProgress {
            opacity: 1;
            position: absolute;
            top: -0.097rem;
            left: -0.0417rem;
            // right: -0.0917rem;
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
        // &:hover {
        //   height: .4167rem;
        //   .moveProgress {
        //     opacity: 1;
        //   }
        // }
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
