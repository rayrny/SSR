/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/server/index.ts"),
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      src: path.resolve(__dirname, "./src/"),
      server: path.resolve(__dirname, "./src/server"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
