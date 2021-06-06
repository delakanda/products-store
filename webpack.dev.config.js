const webpack = require('webpack');
const common = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    stats: 'minimal',
    compress: true,
    inline: true,
    port: 4000,
    hot: true,
    publicPath: '/',
    disableHostCheck: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    // Remove all locales from moment to reducte bundle size
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
});
