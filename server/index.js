const express = require("express");

const app = express();

app.listen(8000, () => {
  console.log("Express server starting... port on 8000");
});
// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`<h3>안녀어어엉어어ㅓ어어어어엉</h3>`);
});
