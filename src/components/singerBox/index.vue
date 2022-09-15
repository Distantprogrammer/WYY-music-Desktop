<template>
  <div class="singerBox">
    <ul>
      <li v-for="(a, i) in 20" :key="i">
        <div class="msgBox">
          <img src="@/images/logo.jpg" />
        </div>
        <p class="playlist_introduced">{{ 454564545145 }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
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
      }
    }
  }
}
</style>
