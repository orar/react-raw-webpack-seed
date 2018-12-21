const path = require('path');
const webpackCommonConfig= require('./webpack.common.config');
const merge = require('webpack-merge');
const webpack = require('webpack');

const config = {
  mode:  process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: "/"
  },
  devtool: "eval",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 3000,
  },
};
console.log(merge(webpackCommonConfig, config))
module.exports = merge(webpackCommonConfig, config);
