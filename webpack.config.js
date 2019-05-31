const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    bundle: './index',
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html' },
      { from: 'favicon.ico' },
      { from: 'robots.txt' },
      { from: 'css/**/*' },
      { from: 'lib/**/*' },
    ], {
      copyUnmodified: false,
    }),
  ],

};
