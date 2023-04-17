import React from "react";
import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from "styled-components";

import App from "../client/App";
import { GlobalStyle } from "../client/global-style";

const styleSheet = new ServerStyleSheet();
const template = fs.readFileSync(
  path.resolve(__dirname, "../../public/index.html"),
  "utf8"
);

// const render = (url: string): { html: string; styleTags: string } => {
//   const html: string = ReactDOMServer.renderToString(
//     styleSheet.collectStyles(
//       <>
//         <GlobalStyle />
//         <StaticRouter location={url}>
//           <App />
//         </StaticRouter>
//       </>
//     )
//   );

//   const styleTags = styleSheet.getStyleTags();

//   return { html, styleTags };
// };

const sendStringifiedHtml = (req: Request, res: Response) => {
  // const { html, styleTags } = render(req.url);

  // const result = template
  //   .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  //   .replace('<style id="server-style"></style>', styleTags);
  // res.send(result);
  console.log(GlobalStyle);
  const { pipe } = renderToPipeableStream(
    styleSheet.collectStyles(
      <>
        <meta charSet="utf-8" />
        <link rel="icon" href="/public/favicon.ico" />
        <title>나는 고양이 있어!</title>
        <style id="server-style">
          <GlobalStyle />
        </style>
        <div id="root">
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        </div>
      </>
    ),
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
