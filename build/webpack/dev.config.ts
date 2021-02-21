import * as path from 'path';
import * as webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './base.config';

const devConfig: webpack.Configuration = {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../../dist'),
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
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
    ],
  },
};

export default merge(baseConfig, devConfig);
