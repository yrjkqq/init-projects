const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.txt$/,
  //       use: 'raw-loader',
  //     },
  //     {
  //       test: /\.css$/,
  //       use: [
  //         {
  //           loader: 'style-loader',
  //         },
  //         {
  //           loader: 'css-loader',
  //         },
  //         {
  //           loader: 'sass-loader',
  //         },
  //       ],
  //     },
  //     {
  //       test: /\.(js|jsx)$/,
  //       use: 'babel-loader',
  //     },
  //   ],
  // },
  // plugins: [
  //   new config.optimization.splitChunks({
  //     name: 'vendor',
  //   }),
  // ],
};
