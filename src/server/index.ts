import express from "express";
import path from "path";

const app = express();

app.listen(8000, () => {
  console.log("Express server starting... port on 8000");
});
// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});
