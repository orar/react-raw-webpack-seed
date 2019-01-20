const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const noScript = '<noscript>You need to enable JavaScript to run this app.</noscript>';

/* eslint-disable global-require */
const htmlConfig = {
  title: 'React with Raw Webpack',
  appMountId: 'app',
  template: require('html-webpack-template'),
  favicon: path.resolve(__dirname, '../src/static/favicon.ico'),
  meta: [
    {
      name: 'robots',
      content: 'nofollow'
    },
    {
      name: 'description',
      content: 'React ES seed bundled with raw Webpack config'
    },
    {
      name: 'keywords',
      content: 'webpack,webpack-4,webpack.config.js,html5,ES7-+,react,sass'
    },
    {
      name: 'viewport',
      content: 'width=device-width, maximum-scale=1, user-scalable=no'
    }
  ],
  inject: false,
  mobile: true,
  //scripts: ['/static.js']
};


module.exports = (config = {}) => {
  const htmlConf = merge(htmlConfig, config);
  return new HtmlWebpackPlugin(htmlConf);
};
