const paths = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssFilename = "static/css/[name].[contenthash:8].css";
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    new ExtractTextPlugin({
      filename: cssFilename
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: paths.scssModulesPath,
        exclude: paths.scssPath,
        loader: ExtractTextPlugin.extract({
          fallback: {
            loader: require.resolve("style-loader"),
            options: {
              hmr: false
            }
          },
          use: [
            {
              loader: require.resolve("css-loader"),
              options: {
                importLoaders: 2,
                modules: true,
                camelCase: true,
                minimize: false,
                localIdentName: "[name]__[local]___[hash:base64:5]",
                sourceMap: true
              }
            },
            {
              loader: require.resolve("postcss-loader"),
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: "postcss",
                plugins: () => [
                  require("postcss-flexbugs-fixes"),
                  autoprefixer({
                    browsers: [
                      ">1%",
                      "last 4 versions",
                      "Firefox ESR",
                      "not ie < 9" // React doesn't support IE8 anyway
                    ],
                    flexbox: "no-2009"
                  })
                ]
              }
            },
            {
              loader: require.resolve("sass-loader"),
              options: {
                includePaths: [paths.scssPath]
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: {
            loader: require.resolve('style-loader'),
            options: {
              hmr: false,
            },
          },
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 2,
                minimize: false,
                sourceMap: true,
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
          ],
        }),
      }
    ]
  }
};
