import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("app");
if (root == null) {
  throw new Error("app 이 존재하지 않습니다.");
}

ReactDOM.hydrateRoot(root, <App />);
