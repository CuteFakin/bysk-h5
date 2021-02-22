const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({ // 配置项，详见官方文档
            remUnit: 75 // 换算的基数 ui输入稿子宽度/10
          })
        ]
      }
    }
  },

  publicPath: '/',
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          deleteOriginalAssets: false
        })]
      }
    }
  },
  chainWebpack: config => {
    // 修复热更新失效
    config.resolve
      .symlinks(true)
    return config
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    // 自动打开浏览器
    open: false,
    // 设置主机地址
    // 设置默认端口
    port: 8080,
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': '' // 默认所有请求都加了api前缀，需要去掉
        }
      }
    }
  }
}
