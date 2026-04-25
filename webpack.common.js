const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './js/app.js',
    '404': './js/404.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'js/[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: './404.html',
      filename: '404.html',
      chunks: ['404'],
    }),
  ],
};
