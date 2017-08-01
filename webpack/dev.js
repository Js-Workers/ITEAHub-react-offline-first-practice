const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './js/main.js',
    vendors: [
      'react',
      'redux',
      'react-redux',
      'redux-thunk',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../'),
    chunkFilename: './js/[name].js',
    filename: './js/[name].js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/(node_modules)/, /\.spec\.jsx$/],
        include: [
          path.resolve(__dirname, '../js')
        ],
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            query: {
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' }),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    }),
  ],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, '../styles/')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, '../'), // match the output path
    compress: true,
    port: 3000,
    historyApiFallback: true
  }
};
