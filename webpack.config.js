/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = (_, { mode }) => ({
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'public', 'index.html'),
      title: 'React Application',
    }),
    new MiniCssPlugin({
      filename: 'styles.min.css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.([j|t]s(x)?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.((s)?css)$/,
        use: [
          mode === 'production' ? MiniCssPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.()$/,
      },
    ],
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  entry: './src/index.tsx',
});
