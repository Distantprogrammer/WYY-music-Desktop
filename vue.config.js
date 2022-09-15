
const path = require('path')

module.exports = {

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 全局变量路径
        path.resolve(__dirname, './src/styles/variables.less')
      ]
    }
  },
  devServer: {
    // disableHostCheck: true,
    // port: process.env.DEV_SERVER_PORT || 8080,
    proxy: {
      '': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
  // devServer: {
  //   proxy: {
  //     '/': { // 匹配所有以 '/headline'开头的请求路径
  //       target: 'http://43.139.36.66:3000', // 代理目标的基础路径
  //       changeOrigin: true
  //     // pathRewrite: { '^/headline': '' } // 替换规则 /headline 替换成 http://is.snssdk.com/
  //     },
  //     '/music': { // 匹配所有以 '/headline'开头的请求路径
  //       target: 'http://43.139.36.66:3000', // 代理目标的基础路径
  //       changeOrigin: true
  //     // pathRewrite: { '^/music': '' } // 替换规则 /headline 替换成 http://is.snssdk.com/
  //     }
  //   }
  // }
}
