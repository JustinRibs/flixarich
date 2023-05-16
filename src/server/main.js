const express = require("express");
const ViteExpress = require("vite-express");

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
  // res.send("bruh");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
