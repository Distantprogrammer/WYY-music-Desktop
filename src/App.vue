<template>
  <div id="app">
     <!-- 一级路由 -->
    <router-view />
  </div>
</template>

<script>

// import Header from '@/views/Header/index.vue'
export default {
  name: 'App',
  mounted () {
    const setFont = function () {
      // 因为要定义变量可能和别的变量相互冲突，污染，所有用自调用函数
      const html = document.documentElement // 获取html
      // 获取宽度
      let width = html.clientWidth
      // 判断
      if (width < 1024) width = 1024
      if (width > 1920) width = 1920
      // 设置html的基准值
      const fontSize = width / 80 + 'px'
      // 设置给html
      html.style.fontSize = fontSize
    }
    setFont()
    window.addEventListener('resize', setFont)
  }

}
</script>
<style lang="less"></style>
