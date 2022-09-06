<template>
  <div class="songlist-content">
    <el-row type="flex">
      <el-image class="el-img" :src="url" fits="cover"> </el-image>
      <el-row>
        <el-row type="flex" align="middle">
          <el-badge class="item"> 歌单 </el-badge>
          <h1 class="title">&nbsp;今天从《Summertime Sadness》听起|私人雷达</h1>
        </el-row>
        <el-row class="usermsg">
          <el-avatar
            class="userimg"
            :size="35"
            fit="cover"
            :src="circleUrl"
          ></el-avatar>
          <el-link class="username" type="primary" :underline="false">
            &nbsp;主要链接 &nbsp;</el-link
          >
          <span>2019-2-26 创建</span>
        </el-row>
        <el-row class="songBtn">
          <el-button round type="danger" icon="el-icon-video-play"
            >播放全部 &nbsp;<i class="el-icon-plus"></i
          ></el-button>
          <el-button round class="transparent" icon="el-icon-folder-checked"
            >已收藏</el-button
          >
          <el-button round class="transparent" icon="el-icon-share"
            >分享</el-button
          >
          <el-button round class="transparent" icon="el-icon-download"
            >下载全部</el-button
          >
        </el-row>
        <el-row class="songnumber">歌曲：<span>5645</span> 播放：<span>155</span></el-row>
        <el-row class="introduce">简介：<span>你爱的歌，值得反复聆听...</span></el-row>
      </el-row>
      <!-- <el-col span="15">
     <el-row type='flex' align="middle">
       <el-badge class="item">
         歌单
     </el-badge>
     <h1 class="title">今天从《Summertime Sadness》听起|私人雷达</h1>
    </el-row>
     <el-row >2</el-row>
     <el-row >3</el-row>
     <el-row >4</el-row>
     <el-row >5</el-row>
  </el-col> -->
    </el-row>
  </div>
</template>

<script>
export default {
  nama: 'songlistIndex',
  data () {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['large', 'medium', 'small']
    }
  }
}
</script>

<style lang="less" scoped>
.songlist-content {
  padding: 30px 30px;
  .el-img {
    width: 185px;
    height: 185px;
    margin-right: 20px;
  }
  .usermsg {
    .userimg {
      vertical-align: middle;
    }
    // .username {
    //   // vertical-align: middle;
    // }
  }
  .songBtn,
  .usermsg,
  .songnumber,
  .introduce {
    margin-top: 10px;
  }
  .songBtn {
    .transparent {
      background-color: transparent;
      border: 1px solid #d0d0d0;
    }
  }
}
.item {
  background-color: transparent;
  color: red;
  border: 1px solid red;
  padding: 1px 3px;
}
.title {
  color: #d0d0d0;
}
.el-row {
  color: #d0d0d0;
}
</style>
