const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './client',
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'public/built/'),
    publicPath: '/built/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVTOOLS__: false,
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
