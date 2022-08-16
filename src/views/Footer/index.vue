<template>
  <div class="footer">
    <div style="height: 3.579rem"></div>
    <div class="wyy_foot">
      <div class="details">
        <!-- 音乐图像 -->
        <div class="icon">
          <div class="modal"><i class="iconfont">&#xe687;</i></div>
          <img src="" alt="展示音乐详情页" />
        </div>
        <!-- 音乐名 作者 -->
        <div class="song">
          <div class="name">
            <a href="#">起风了</a><i class="iconfont">&#xeca1;</i>
          </div>
          <div class="author"><a href="#">买辣椒也用劵</a></div>
        </div>
      </div>
      <!-- 播放设置 -->
      <div class="player">
        <ul>
          <li class=""><i class="iconfont">&#xe6b4;</i></li>
          <li class=""><i class="iconfont">&#xe7ef;</i></li>
          <li class="paly"><i class="iconfont">&#xe7c5;</i></li>
          <li class=""><i class="iconfont">&#xe7ef;</i></li>
          <li class="word">词</li>
        </ul>
        <div class="schedule">
          <span class="start">00:40</span>
          <div class="progressBar">
            <div class="progressBar_background"></div>
          </div>
          <span class="end">03:00</span>
        </div>
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
export default {}
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
        border-radius: 0.036rem;
        margin: 0 0.282rem;
        background-color: #cdcdcd;
        .progressBar_background {
          max-width: 100%;
          width: 20px;
          height: 100%;
          background-color: red;
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
}
</style>
