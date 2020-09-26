const argv = require('yargs-parser')(process.argv.slice(2))
const merge = require("webpack-merge")
const mode = argv.mode
const {
  resolve,
  join,
  basename
} = require("path")
const _mergeConfig = require(`./config/webpack.${mode}.js`)

let commonConfig = {
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },

}