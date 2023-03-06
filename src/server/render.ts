import { Request, Response } from "express";
import renderApp from "../client/App.server";

const sendStringifiedHtml = (req: Request, res: Response) => {
  const html = renderApp();
  res.send(html); // 여기서 완성된 html string 을 보내주도록 해야함
};

export default sendStringifiedHtml;
