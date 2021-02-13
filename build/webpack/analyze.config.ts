import webpack from 'webpack';
import merge from 'webpack-merge';
import devConfig from './dev.config';
import prodConfig from './prod.config';
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');

const isDev = process.env.MODE === 'development';
const config = isDev ? devConfig : prodConfig;

const analyzerConfig: webpack.Configuration = {
  plugins: [new BundleStatsWebpackPlugin()],
};

export default merge(config, analyzerConfig);
