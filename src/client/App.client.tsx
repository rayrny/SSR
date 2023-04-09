import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = document.getElementById("root");
if (root == null) {
  throw new Error("root가 존재하지 않습니다.");
}

ReactDOM.hydrateRoot(
  root,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
