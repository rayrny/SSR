import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import App from "./App";

const styleSheet = new ServerStyleSheet();
const render = (): { html: string; styleTags: string } => {
  const html: string = ReactDOMServer.renderToString(
    styleSheet.collectStyles(<App />)
  );

  const styleTags = styleSheet.getStyleTags();

  return { html, styleTags };
};

export default render;
