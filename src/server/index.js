import path from "path";
import express from "express";

// expressオブジェクトを作成
const app = express();
// ポート番号を指定
const PORT = 9000;

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
