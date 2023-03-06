import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const app = document.getElementById("app");
if (app == null) {
  throw new Error("app 이 존재하지 않습니다.");
}
const root = ReactDOM.createRoot(app);
root.render(<App />);
