const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
/** @type {import('webpack').Configuration} */

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|s[ac]ss)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg)/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './[name].css',
    }),
    new HtmlWebpackPlugin({
      // filename: 'index.html',
      title: 'Countries API',
      template: './public/index.html',
    }),
    new WebpackPwaManifest({
      name: 'REST Countries API with color theme switcher',
      short_name: 'Countries API',
      description:
        'Una colección de las banderas y otros datos de paises de todo el mundo',
      background_color: '#fff',
      theme_color: '#bf1',
      icons: [
        {
          src: path.resolve(__dirname, 'public/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://countries-api-six.vercel.app/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
};
