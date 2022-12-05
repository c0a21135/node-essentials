const express = require("express");
const app = express();
function isAuthorized(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === 'hogehogepiyopiyo') { //シークレットパスワード
    next();
  } else {
    res.status(401);
    res.send('Not permitted'); // パスワードが違うときの表示
  }
}
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", isAuthorized, (req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
  ]);
});

// フォーム内容を送信する為に"urlencoded"を使用する
app.use(express.urlencoded({ extended: true}));

// URL「/information」にて送信フォームを作成
app.get("/information", (req, res, next) => {
  res.send(
    '<form action="/" method="POST"><input type="text" name="information"><button type="submit">送信</button></form>'
  );
});

// postを使ってホームにフォームの内容が表示できるように
app.post("/", (req, res, next) => {
  res.send(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
