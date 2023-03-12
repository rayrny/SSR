import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import renderApp from "../client/App.server";

const template = fs.readFileSync(
  path.resolve(__dirname, "../../public/index.html"),
  "utf8"
);

const makeupHtmlFile = (body: string, styles: string) => {
  const result = template
    .replace('<div id="app"></div>', body)
    .replace('<style id="server-style"></style>', styles);
  return result;
};
const sendStringifiedHtml = (req: Request, res: Response) => {
  const { html, styleTags } = renderApp();
  res.send(makeupHtmlFile(html, styleTags)); // 여기서 완성된 html string 을 보내주도록 해야함
};

export default sendStringifiedHtml;
