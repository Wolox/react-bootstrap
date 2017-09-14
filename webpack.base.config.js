const path = require('path');
const webpack = require('webpack');
const config = require('./config');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        use: {
          /* Babel configuration will be in the babelrc file */
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'src/sass/')
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
    ]
  },
  plugins: [
    /*
      This plugin is for commons file or helpers so it doesn't repeat itself in the final bundle.
      The number of minChunks is the times this file must be imported by different files for this plugin to be executed.
    */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    })
  ]
};
