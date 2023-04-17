/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const nodeExternals = require("webpack-node-externals");

const isProd = false;
const clientConfig = {
  mode: isProd ? "production" : "development",
  target: "web",
  entry: path.resolve(__dirname, "src/client/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist/client"),
    publicPath: "public",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
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
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  devServer: {
    port: 8000,
    allowedHosts: "auto",
    client: {
      logging: "info",
      progress: true,
    },
    static: [
      {
        directory: path.resolve(__dirname, "./public"),
      },
    ],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};

const serverConfig = {
  mode: isProd ? "production" : "development",
  target: "node",
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, "src/server/index.ts"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public/dist/server"),
    publicPath: "public",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
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
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
};

module.exports = [clientConfig, serverConfig];
