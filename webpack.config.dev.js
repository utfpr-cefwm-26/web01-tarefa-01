const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'lightningcss-loader'
        ],
      },
    ],
  },
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./'],
    historyApiFallback: {
      index: '/404.html',
    },
  },
});