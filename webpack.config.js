const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
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
          {loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'src/sass/')
              ]
            }
          }
        ]
      }
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
}
