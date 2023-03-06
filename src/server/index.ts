import express from "express";
// import path from "path";
import render from './render';

const app = express();

app.listen(8000, () => {
  console.log("Express server starting... port on 8000");
});
// app.use(express.static("public"));

app.get("/", render);

// 404, 500