import express from "express";
// import path from "path";
import render from './render';
import dotenv from "dotenv";
import minimist from "minimist";

dotenv.config();
const app = express();
const args = minimist(process.argv.slice(2));

const port = args.p || args.port || 8000;
app.listen(port, () => {
  console.log(`Express server starting... port on ${port}`);
});
app.use("/public", express.static("public"));
app.use("/dist", express.static("dist"));

app.use("/", render);

// 404, 500