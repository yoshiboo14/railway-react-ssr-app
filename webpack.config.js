/** ↓ エディタで補完を効かせるための JSDoc */
/** @type {import('webpack').Configuration} */

const webpack = require("webpack"); // webpackを追加
const path = require("path");

const config = {
  // エントリーを指定
  entry: "./src/server/index.js",
  // 依存関係解決に参照するファイルの拡張子を指定
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    alias: {
      path: require.resolve("path-browserify"),
    },
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  target: "node", // こちらを追加
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      express: "express",
    }),
  ],
  // Dev Serverの設定
  devServer: {
    // contentBase: './dist',  // この行を削除またはコメントアウトするか、staticプロパティを使用する
    static: {
      directory: path.join(__dirname, "dist"), // 適切なディレクトリに変更
    },
    port: 9000,
    open: true,
  },
};

module.exports = config;
