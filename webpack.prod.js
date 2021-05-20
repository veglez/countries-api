/** @type {import('webpack').Configuration} */

const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
});
