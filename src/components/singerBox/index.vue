<template>
  <div class="singerBox">
    <ul>
      <li v-for="obj in artists" :key="obj.id">
        <div class="msgBox">
          <img :src="obj.img1v1Url" />
        </div>
        <p class="playlist_introduced">{{ obj.name }} <i v-if="obj.accountId" class="iconfont icon-zhanghaoguanli"></i></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    artists: {
      type: [Object, Array]
    }
  }
}
</script>

<style lang="less" scoped>
.singerBox {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      flex: 16.6666%;
      // float: left;
      width: 8.3333rem;
      margin: 0 0.7167rem 0.4167rem 0.7167rem;
      &:nth-child(6n),
      &:first-child {
        margin-left: 0;
      }
      &:nth-child(5n),
      &:last-child {
        margin-right: 0;
      }
      // 图片
      .msgBox {
        border-radius: 5px;
        overflow: hidden;
        width: 100%;
        height: 200px;
        position: relative;
        font-size: 11px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      // 文字
      .playlist_introduced {
        color: #fff;
        padding: 10px;
        font-size: 14px;
        .icon-zhanghaoguanli{
          color: rgb(187, 68, 68);
           font-size: 18px;
          float:right;
        }
      }
    }
  }
}
</style>
