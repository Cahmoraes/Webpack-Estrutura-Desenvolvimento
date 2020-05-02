const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js','.ts'] 
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Webpack\'s studies',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
}