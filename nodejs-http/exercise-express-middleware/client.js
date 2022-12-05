const http = require("http");

// URL「/users」の情報取得
http.get(
  {
    port: 3000,
    hostname: "localhost",
    path: "/users",
    headers: {
      authorization: 'hogehogepiyopiyo' // 接続するときのパスワードの設定？
    },
  },
  (res) => {
    console.log("connected");
    res.on("data", (chunk) => {
      console.log("chunk", "" + chunk);
    });
    res.on("end", () => {
      console.log("No more data");
    });
    res.on("close", () => {
      console.log("Closing connection");
    });
  }
);

// URL「/products」の情報取得
http.get(
  {
    port: 3000,
    hostname: "localhost",
    path: "/products",
    headers: {},
  },
  (res) => {
    console.log("connected");
    console.log("get data /products")
    res.on("data", (chunk) => {
      console.log("chunk", "" + chunk);
    });
    res.on("end", () => {
      console.log("No more data");
    });
    res.on("close", () => {
      console.log("Closing connection");
    });
  }
);