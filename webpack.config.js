/** ↓ エディタで補完を効かせるための JSDoc */
/** @type {import('webpack').Configuration} */

// CommonJS
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// ESmodule
// import path from "path";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";

// クライアント側
const client = {
  entry: "/src/client/client.tsx",
  mode: "development",
  devtool: "source-map", // マップを追加
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "dist"), // 出力するフォルダ
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // CSSファイルを個別に出力するためのローダー
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

// サーバーサイド側
const server = {
  mode: "development",
  entry: "./src/server/index.js",
  target: "node",
  devtool: "source-map", // マップを追加
  output: {
    filename: "server.bundle.js",
    // CommonJS
    path: path.resolve(__dirname, "dist"), // 出力するフォルダ
    // ESmodule
    // path: path.resolve(new URL(".", import.meta.url).pathname, "dist"),
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // CSSファイルを個別に出力するためのローダー
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

// CommonJS
module.exports = [client, server];
// ESmodule
// export default config;
