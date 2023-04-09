import React from "react";
import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import App from "../client/App";

const styleSheet = new ServerStyleSheet();
const template = fs.readFileSync(
  path.resolve(__dirname, "../../public/index.html"),
  "utf8"
);

const render = (): { html: string; styleTags: string } => {
  const html: string = ReactDOMServer.renderToString(
    styleSheet.collectStyles(<App />)
  );

  const styleTags = styleSheet.getStyleTags();

  return { html, styleTags };
};

const makeupHtmlFile = (body: string, styles: string) => {
  const result: string = template
    .replace('<div id="app"></div>', body)
    .replace('<style id="server-style"></style>', styles);
  return result;
};

const sendStringifiedHtml = (req: Request, res: Response) => {
  const { html, styleTags } = render();
  res.send(makeupHtmlFile(html, styleTags)); // 여기서 완성된 html string 을 보내주도록 해야함
};

export default sendStringifiedHtml;
