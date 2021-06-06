const common = require('./webpack.common.config');
const webpackProd = require('webpack');
const { merge } = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const dotenv = require('dotenv');

module.exports = merge(common, {
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false,
      parallel: true,
    }),
    new webpackProd.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    // Remove all locales from moment to reducte bundle size
    new webpackProd.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
});
