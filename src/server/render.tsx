import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from "styled-components";

import App from "../client/App";
import { GlobalStyle } from "../client/global-style";

const template = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
const styleSheet = new ServerStyleSheet();

const render = (req: Request, res: Response) => {
  const RootApp = () => (
    <>
      <GlobalStyle />
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </>
  );

  const html: string = renderToString(styleSheet.collectStyles(<RootApp />));
  const styleTags: string = styleSheet.getStyleTags();

  const result = template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace(
      '<style id="server-style"></style>',
      `<style id="server-style">${styleTags}</style>`
    );

  res.send(result);
};

export default render;
