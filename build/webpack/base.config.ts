import * as path from 'path';
import * as webpack from 'webpack';

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'New Project',
      template: path.resolve(__dirname, '../../src/index.html'),
    }),
  ],
};

export default config;
