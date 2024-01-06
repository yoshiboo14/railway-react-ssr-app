import React from "react"; //Expressフレームワークを使用できるようにする
import express from "express";
import ReactDOMServer from "react-dom/server";
// import { renderToString } from "react-dom/server"; //追加
import { App } from "../App.tsx";
const path = require("path");

const app = express(); // expressオブジェクトを作成
const PORT = 9000; // ポート番号を指定

app.get("/", (req, res) => {
  // コンポーネントをHTMLに変換
  const WeatherApp = ReactDOMServer.renderToString(<App />);

  // HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
      <meta charset="utf-8"/>
        <title>SSR天気</title>
        <link rel="stylesheet" type="text/css" href="./styles.css" />
        <script type="module" src="./client.bundle.js"></script>
      </head>
      <body>
        <div id="ssr">${WeatherApp}</div>
      </body>
    </html>
  `;
  // コンポーネントが埋め込まれたHTMLをレスポンス
  res.send(html);
  // console.log(html);
});

// dist ディレクトリを静的ファイルのルートとしてdistを指定
app.use(express.static(path.join(__dirname, "dist")));
// console.log(__dirname);

// サーバーを起動
app.listen(PORT, () => {
  console.log(`ポート${PORT}で待受中...`);
});

app.get("/client.bundle.js", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/client.bundle.js"));
});

app.get("/server.bundle.js", (req, res) => {
  res.sendFile(path.resolve(__dirname + "server.bundle.js"));
});

app.get("/styles.css", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/styles.css"));
});

// ホームページに対してGET要求があった際の処理
app.get("/aa", (req, res) => {
  res.send("Hello World");
});
