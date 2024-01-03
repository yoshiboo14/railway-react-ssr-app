import React from "react";
import path from "path";
import express from "express";
import { renderToString } from "react-dom/server";
import App from "../App.tsx";

// expressオブジェクトを作成
const app = express();
// ポート番号を指定
const PORT = 9000;

// dist ディレクトリを静的ファイルのルートとして指定
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  // コンポーネントをHTMLに変換
  const WeatherApp = renderToString(<App />);

  // HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>お天気SSR</title>
        <link rel="stylesheet" type="text/css" href="./styles.css" />
        <script src="./main.mjs"></script>
        <script src="./otamesi.js"></script>
      </head>
      <body>
        <div id="ssr-root">${WeatherApp}</div>
      </body>
    </html>
  `;
  // コンポーネントが埋め込まれたHTMLをレスポンス
  res.send(html);
  // console.log(html);
});

// サーバーを起動
app.listen(PORT, () => {
  console.log(`ポート${PORT}で待受中...`);
});

app.get("/main.mjs", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/" + "main.mjs"));
});

app.get("/otamesi.js", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/" + "otamesi.js"));
});

app.get("/styles.css", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/" + "styles.css"));
});

// ホームページに対してGET要求があった際の処理
app.get("/aa", (req, res) => {
  res.send("Hello World");
});
