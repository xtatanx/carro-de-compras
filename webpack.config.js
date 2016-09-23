const autoprefixer = require('autoprefixer');
const lost = require('lost');
const path = require('path');
const rucksack = require('rucksack-css');
const rupture = require('rupture');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    './dev/app/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        exclude: ['node_modules'],
        loader: 'style-loader!css-loader?sourceMap!postcss-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      },
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  stylus: {
    use: [rupture],
    import: ['~rupture/rupture/index.styl']
  },
  postcss: function () {
    return [lost, rucksack, autoprefixer];
  }
};