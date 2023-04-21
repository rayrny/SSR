import React, { ReactNode } from "react";
import { Request, Response } from "express";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from "styled-components";

import App from "../client/App";
import { GlobalStyle } from "../client/global-style";

const styleSheet = new ServerStyleSheet();

const getStyleTags = (element: ReactNode) => {
  renderToString(styleSheet.collectStyles(element));

  return styleSheet.getStyleTags();
};

const sendStringifiedHtml = (req: Request, res: Response) => {
  const RootApp = () => (
    <>
      <GlobalStyle />
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </>
  );

  const { pipe } = renderToPipeableStream(
    <>
      <meta charSet="utf-8" />
      <link rel="icon" href="/public/favicon.ico" />
      <title>나는 고양이 있어!</title>
      <style
        id="server-style"
        dangerouslySetInnerHTML={{ __html: getStyleTags(<RootApp />) }}
      ></style>
      <div id="root">
        <RootApp />
      </div>
    </>,
    {
      bootstrapScripts: ["/public/dist/client/bundle.js"],
      onShellReady() {
        res.setHeader("content-type", "text/html");
        pipe(res);
      },
    }
  );
};

export default sendStringifiedHtml;
