/** ↓ エディタで補完を効かせるための JSDoc */
/** @type {import('webpack').Configuration} */

import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = {
  // 依存関係解決に参照するファイルの拡張子を指定
  mode: "development",
  // エントリーを指定
  entry: "./src/server/index.js",
  target: "node",
  devtool: "source-map",
  output: {
    filename: "main.mjs",
    // 出力するフォルダ
    path: path.resolve(new URL(".", import.meta.url).pathname, "dist"),
    publicPath: "/",
    // module: true,
  },
  // experiments: {
  //   outputModule: true,
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react", //ReactのPresetを追加
              "@babel/preset-typescript",
            ],
            plugins: ["@babel/plugin-syntax-jsx"], //JSXパース用
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // CSSファイルを個別に出力するためのローダー
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};

export default config;
