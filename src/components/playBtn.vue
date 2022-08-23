<template>
  <div class="playbtn">
    <button>
      <i
        class="iconfont icon-play-mini-fill"
        :style="classAcitve "
      ></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PlayBtn',
  props: {
    classAcitve: {
      type: [Object, Array, String]
    }
  }
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
      // line-height: 100%;
      font-size: 2em;
      // padding: 1px;
      color: red;
    }
  }
}
</style>
