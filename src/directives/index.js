export const domClick = {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (dom) {
    // 聚焦元素
    dom.click()
  }
}
