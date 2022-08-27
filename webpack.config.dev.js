const path = require('path');
const yaml = require('yamljs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css'],
    alias: {
      '@/components': path.resolve(__dirname, 'src/components/'),
      '@/pages': path.resolve(__dirname, 'src/pages/'),
      '@/hooks': path.resolve(__dirname, 'src/hooks/'),
      '@/types': path.resolve(__dirname, 'src/types/'),
      '@/atoms': path.resolve(__dirname, 'src/atoms/'),
      '@/utils': path.resolve(__dirname, 'src/utils/'),
      '@/constants': path.resolve(__dirname, 'src/constants/'),
      '@/styles': path.resolve(__dirname, 'src/styles/'),
      '@/assets': path.resolve(__dirname, 'public/assets/'),
    },
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Moiza project',
      template: './src/index.html',
    }),
    new Dotenv(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
