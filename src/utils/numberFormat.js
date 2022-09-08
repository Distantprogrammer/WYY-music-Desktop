import Vue from 'vue'
Vue.filter('numberFormat', function (value) {
  let unit = ''
  const k = 10000
  const sizes = ['', '万', '亿', '万亿']
  let i
  if (value < k) {
    return value
  } else {
    i = Math.floor(Math.log(value) / Math.log(k))
    value = ((value / Math.pow(k, i))).toFixed(0)
    unit = sizes[i]
  }
  return value + unit
})
