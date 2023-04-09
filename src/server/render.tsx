import React from "react";
import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import App from "../client/App";
import { GlobalStyle } from "../client/global-style";

const styleSheet = new ServerStyleSheet();
const template = fs.readFileSync(
  path.resolve(__dirname, "../../public/index.html"),
  "utf8"
);

const render = (): { html: string; styleTags: string } => {
  const html: string = ReactDOMServer.renderToString(
    styleSheet.collectStyles(
      <>
        <GlobalStyle />
        <App />
      </>
    )
  );

  const styleTags = styleSheet.getStyleTags();

  return { html, styleTags };
};

const sendStringifiedHtml = (req: Request, res: Response) => {
  const { html, styleTags } = render();

  const result = template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace('<style id="server-style"></style>', styleTags);

  res.send(result);
};

export default sendStringifiedHtml;
