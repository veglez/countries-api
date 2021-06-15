const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

/** @type {import('webpack').Configuration} */

module.exports = merge(webpackCommon, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 8020,
    open: true,
  },
});
