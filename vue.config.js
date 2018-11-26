module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/status/' : '/',
  transpileDependencies: ['vuex-module-decorators']
}
