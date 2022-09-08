
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
  }
}
