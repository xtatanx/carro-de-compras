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
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?sourceMap!postcss-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      },
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        loader: 'ng-annotate!babel-loader?presets[]=es2015',
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url?limit=100000&name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'url?limit=100000&name=assets/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: false
    })
  ],
  stylus: {
    use: [rupture],
    import: ['~rupture/rupture/index.styl']
  },
  postcss: function () {
    return [lost, rucksack, autoprefixer];
  }
};