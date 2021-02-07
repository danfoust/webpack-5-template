import * as webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './base.config';

const prodConfig: webpack.Configuration = {
  mode: 'production',
  output: {
    filename: '[name].[fullhash:6].js',
  },
};

export default merge(baseConfig, prodConfig);
