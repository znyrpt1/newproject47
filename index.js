const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World sdfsdf 46777!");
});

app.listen(port, () => {
  console.log(`dsExample app listening at http://localhost:${port}`);
});