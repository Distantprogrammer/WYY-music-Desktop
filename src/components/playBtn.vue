<template>
  <div class="playbtn">
    <button><i class="iconfont icon-play-mini-fill"></i></button>
  </div>
</template>

<script>
export default {
  name: 'PlayBtn'
}
</script>

<style lang="less" scoped>
.playbtn {
  button {
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 50%;
    width: 100%;
    height: 100%;
    text-align: center;
    i {
      font-size: 2  em;
      // padding: 1px;
      color: red;
    }
  }
}
</style>
