import * as webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './base.config';

const devConfig: webpack.Configuration = {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
};

export default merge(baseConfig, devConfig);
