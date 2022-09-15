// 点击空白区域关闭盒子
// Box 盒子 show 控制变量
export function showBox (Box, show, e) {
  if (show) {
    if (Box) {
      if (!Box.contains(e.target)) {
        // document.removeEventListener('click', showBox) // 应该是错的
        return false
      } else {
        return true
      }
    }
  }
}
