
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
    // proxy: {
    //   '': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true
    //   }
    // }
  }
}
