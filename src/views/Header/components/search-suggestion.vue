<template>
  <div class="search-suggestion">
    <!-- 猜你想搜 -->
    <div class="guess">
      <van-cell icon="search">
        <span slot="title">猜你想搜</span>
      </van-cell>
      <div class="search_result">
        <van-cell title="单元格" />
        <van-cell title="单元格" />
        <van-cell title="单元格" />
        <van-cell title="单元格" />
        <van-cell title="单元格" />
        <van-cell title="单元格" />
      </div>
    </div>
    <!-- 单曲 -->
    <div class="single">
      <van-cell icon="search">
        <span slot="title">单曲</span>
      </van-cell>
      <div class="search_result">
        <van-cell>
          <span slot="title"
            >单元格子&nbsp; <span>灰色字体</span>&nbsp;
            <span>作者</span>
          </span>
        </van-cell>
      </div>
    </div>
    <!-- 歌手 -->
    <div class="singer">
       <van-cell icon="search">
        <span slot="title">歌手</span>
      </van-cell>
      <div class="search_result">
        <van-cell title="歌手" />
      </div>
    </div>
    <!-- 专辑 -->
    <div class="album">
      <van-cell icon="search">
        <span slot="title">专辑</span>
      </van-cell>
      <div class="search_result">
        <van-cell>
          <span slot="title"
            >单元格子&nbsp;
            <span>作者</span>
          </span>
        </van-cell>
      </div>
    </div>
    <!-- 歌单 -->
    <div class="song_list">
       <van-cell icon="search">
        <span slot="title">歌单</span>
      </van-cell>
      <div class="search_result">
        <van-cell title="歌手" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchSuggestion'
}
</script>

<style lang="less" scoped>
.search_result {
  padding: 0 16px;
  .van-cell__title {
    padding: 5px 0;
    font-size: 12px;
  }
}
</style>
