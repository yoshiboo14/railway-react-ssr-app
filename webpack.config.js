/** ↓ エディタで補完を効かせるための JSDoc */
/** @type {import('webpack').Configuration} */

const webpack = require("webpack"); // webpackを追加
const path = require("path");

const config = {
  mode: "production",
  // エントリーを指定
  entry: "./src/server/index.js",
  // 依存関係解決に参照するファイルの拡張子を指定
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  module: {
    rules: [
      {
        // 拡張子 js のファイル（正規表現）
        test: /\.js$/, // 対象の拡張子
        // ローダーの指定
        loader: "babel-loader",
      },
      //   {
      // 拡張子 css のファイル（正規表現）
      // test: /\.css$/,
      // use: ["style-loader", "css-loader"],
      //   },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^express$/,
    }),
  ],
  devServer: {
    static: {
      directory: "./dist",
    },
  },
};

// 設定を CommnJS 形式でエクスポート
module.exports = config;
