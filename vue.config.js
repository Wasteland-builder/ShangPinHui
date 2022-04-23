const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  devServer:{
    proxy:{
      '/api': {
          target: 'http://39.98.123.211',
      }
    }
  }
})
