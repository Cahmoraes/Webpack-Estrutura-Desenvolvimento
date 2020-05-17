const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.common.config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  }
})