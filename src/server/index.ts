import express from "express";
// import path from "path";
import render from './render';
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.listen(8000, () => {
  console.log("Express server starting... port on 8000");
});
app.use("/public", express.static("public"));
app.use("/dist", express.static("dist"));

app.use("/", render);

// 404, 500