const path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './client/index.js',
  devServer: { publicPath: '/', contentBase: './views', hot: true, port: 8080 },
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {test: /\.js?$/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}},
      {test: /\.css?$/, use: ['style-loader','css-loader']},
    ],
  },
};
