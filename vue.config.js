var SymlinkWebpackPlugin = require('symlink-webpack-plugin')

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(new SymlinkWebpackPlugin({
      origin: 'index.html',
      symlink: '404.html'
    }))
  },
  transpileDependencies: ['vuex-module-decorators']
}
