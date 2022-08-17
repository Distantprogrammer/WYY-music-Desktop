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
    background-color: #f0eeec;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    text-align: center;
    i {
      // font-size: 14px;
      // padding: 1px;
      color: red;
    }
  }
}
</style>
