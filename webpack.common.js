const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{ loader: "url-loader", options: { limit: 5000 } }]
      },
      {
        test: /\.js$/,
        exclude: ['nodule_modules'],
        use: [{
          loader: 'babel-loader'
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    new CleanWebPackPlugin(['dist']),
    new webpack.ProgressPlugin(),
  ],
}