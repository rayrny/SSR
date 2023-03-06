import ReactDOMServer from "react-dom/server";
import App from "./App";

const render = (): string => {
  const html: string = ReactDOMServer.renderToString(<App />);

  return html;
};

export default render;
