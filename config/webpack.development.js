const path = require('path')
const pathroot = path.join(__dirname, '..')
const vueSSrClientPlugin = require('vue-server-renderer/client-plugin')
const htmlwp = require('html-webpack-plugin')
module.exports = {
  entry: ['/'],
  plugins: [new vueSSrClientPlugin()]
}