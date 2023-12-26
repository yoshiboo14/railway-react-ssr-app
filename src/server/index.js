const express = require("express"); // expressモジュールを読み込み
const path = require("path");
const app = express(); // expressオブジェクトを作成
const PORT = 9000; // ポート番号を指定

// dist ディレクトリを静的ファイルのルートとして指定
app.use(express.static(path.join(__dirname, "dist")));

// サーバーを起動
app.listen(PORT, () => {
  console.log(`ポート${PORT}で待受中...`);
});

// ホームページに対してGET要求があった際の処理
app.get("/", (req, res) => {
  res.send("Hello World");
});
