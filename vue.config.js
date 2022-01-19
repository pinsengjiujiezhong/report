module.exports = {
  devServer: {
    hot: true,
    host: 'localhost',
    port: 8080,
    proxy:{
      '/api': {
        target: 'http://10.202.141.6:5000',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap: true,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  }
}
