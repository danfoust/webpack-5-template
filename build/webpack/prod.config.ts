import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import * as webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './base.config';

const prodConfig: webpack.Configuration = {
  mode: 'production',
  output: {
    filename: '[name].[fullhash:6].js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false,
          },
          // reference: https://github.com/terser/terser#compress-options
          compress: {
            arrows: true,
            arguments: true,
            booleans_as_integers: true,
            dead_code: true,
            directives: true,
            drop_debugger: true,
            if_return: true,
            inline: true,
            join_vars: true,
            loops: true,
            unused: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:6].css',
      chunkFilename: '[id].[contenthash:6].css',
    }),
  ],
};

export default merge(baseConfig, prodConfig);
