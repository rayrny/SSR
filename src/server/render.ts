import { Request, Response } from "express";
import renderApp from "../client/App.server";

const makeHtmlFile = (head: string, body: string) => `
  <!DOCTYPE html>
  <html>
    <head>${head}</head>
    <body>${body}</body>
  </html>`;
const sendStringifiedHtml = (req: Request, res: Response) => {
  const { html, styleTags } = renderApp();
  res.send(makeHtmlFile(html, styleTags)); // 여기서 완성된 html string 을 보내주도록 해야함
};

export default sendStringifiedHtml;
