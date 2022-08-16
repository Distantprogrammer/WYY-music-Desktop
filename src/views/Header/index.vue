<template>
  <div class="header">
    <div class="wyy_top">
      <div class="wyy_logo">
        <h1>
          <span class="logo_img"></span>
          <span class="logo_title">网易云音乐</span>
        </h1>
      </div>
      <div class="wyy_search">
        <div class="history">
          <span class="history_back"><i class="iconfont">&#xe685;</i></span>
          <span class="history_next"><i class="iconfont">&#xe688;</i></span>
        </div>
        <div class="search_box">
          <div class="search_btn"><i class="iconfont">&#xe600;</i></div>
          <input type="text" class="search_nav iconfont" placeholder="搜索" />
          <div class="search_voice"><i class="iconfont">&#xe647;</i></div>
        </div>
      </div>
      <div class="wyy_username">
        <ul class="usermessage">
          <li class="userPhoto">
            <div>
              <a href="#"></a>
            </div>
            <div>
              <em>-远方的远</em>
              <span>CVIP·伍</span>
              <i class="iconfont">&#xe687;</i>
            </div>
          </li>
          <li>
            <a href="javascript:;"><i class="iconfont">&#xe8c7;</i></a>
          </li>
          <li>
            <a href="javascript:;"><i class="iconfont">&#xe68f;</i></a>
          </li>
          <li>
            <a href="javascript:;"><i class="iconfont">&#xe908;</i></a>
          </li>
        </ul>
        <ul class="usershut">
          <li>
            <a href="#"><i class="iconfont">&#xe686;</i></a>
          </li>
          <li>
            <a href="#"><i class="iconfont">&#xe686;</i></a>
          </li>
          <li>
            <a href="#"><i class="iconfont">&#xe686;</i></a>
          </li>
          <li>
            <a href="#"><i class="iconfont">&#xe686;</i></a>
          </li>
        </ul>
      </div>
    </div>
    <div style="height: 3.125rem"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
//  头部模块
.wyy_top {
  position: fixed;
  top: 0;
  color: #fff;
  width: 100%;
  display: flex;
  background-color: #202023;
  // background-color: pink;
  align-items: center;
  height: 3.125rem;
  // logo模块
  .wyy_logo {
    min-width: 105px;
    cursor: pointer;
    padding: 0.833rem 0rem 0.833rem 0.833rem;
    h1 {
      display: flex;
      align-items: center;
      .logo_img {
        display: inline-block;
        width: 1.367rem;
        height: 1.367rem;
        background: url('') no-repeat 0 0 / contain;
        background-size: 101% 101%;
        border-radius: 50%;
        vertical-align: text-top;
      }
      .logo_title {
        display: inline-block;
        color: #fff;
        padding-left: 0.182rem;
        vertical-align: middle;
        font-size: 0.667rem;
      }
    }
  }

  // 搜索模块
  .wyy_search {
    display: flex;
    width: 15.125rem;
    margin-left: 5rem;
    // 历史按钮箭头
    .history {
      display: flex;
      align-items: center;
      min-width: 45px;
      cursor: pointer;
      span {
        display: block;
        width: 1.067rem;
        height: 1.067rem;
        line-height: 1.067rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.667rem;
        background-color: #2a2a2d;
      }
      .history_back {
        color: #fff;
        margin-right: 0.5rem;
      }
      .history_next {
        color: #69696b;
      }
    }
    .search_box {
      // 搜索按钮
      display: flex;
      align-items: center;
      height: 3.125rem;
      margin-left: 0.521rem;
      cursor: pointer;
      .search_btn {
        width: 1.667rem;
        height: 1.458rem;
        text-align: center;
        line-height: 1.458rem;
        background-color: #2a2a2d;
        border-top-left-radius: 1.167rem;
        border-bottom-left-radius: 1.167rem;
        i {
          color: #fff;
          font-size: 0.651rem;
        }
      }
      .search_nav {
        color: #69696b;
        font-size: 0.667rem;
        width: 7.5rem;
        height: 1.458rem;
        background-color: #2a2a2d;
        border-top-right-radius: 1.167rem;
        border-bottom-right-radius: 1.167rem;
      }
      .search_voice {
        margin-left: 0.26rem;
        width: 1.458rem;
        height: 1.458rem;
        border-radius: 50%;
        text-align: center;
        line-height: 1.458rem;
        color: #fff;
        background-color: #1e1e21;
      }
    }
  }

  // 用户模块
  .wyy_username {
    margin-left: auto;
    display: flex;
    align-items: center;
    i {
      color: #fff;
    }
    ul {
      display: flex;
      cursor: pointer;
      // margin-right: 0.833rem;
    }
    .usermessage {
      min-width: 223px;
      .userPhoto {
        & > * {
          padding-right: 0.13rem;
        }
        font-size: 0.469rem;
        div {
          display: inline-block;
          a {
            display: inline-block;
            width: 1.458rem;
            height: 1.458rem;
            background: url() no-repeat center/contain;
            border-radius: 50%;
            vertical-align: middle;
          }
        }
        span {
          color: #fff;
          border-radius: 0.09rem;
          height: 0.469rem;
          padding: 0.056rem 0.13rem;
          font-size: 0.365rem;
          text-align: center;
          background-color: #020201;
        }
        i {
          font-size: 0.469rem;
        }
      }
      li {
        padding: 0 0.26rem;
        line-height: 1.458rem;
        &:nth-child(3),
        &:last-child {
          i {
            font-size: 0.656rem;
          }
        }
      }
    }
    .usershut {
      margin-right: 0.26rem;
      justify-content: space-around;
      width: 5.469rem;
    }
  }
}
</style>
