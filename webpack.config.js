const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const filenameRegex = /([.\w\d_-]*)\.[^\\\/]*$/i;

module.exports = {
  entry: glob.sync('./src/*.ts').reduce(
    (acc, val) => ({
      ...acc,
      [val.match(filenameRegex)[1]]: val
    }),
    {}
  ),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(['dist'])],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};
