const express = require("express");
const app = express();
function isAuthorized(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') { //シークレットパスワード
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
