/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  entry: "./src/server/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
