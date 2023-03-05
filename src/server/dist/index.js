"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(8000, () => {
    console.log("Express server starting... port on 8000");
});
// app.use(express.static("public"));
const data = `<h3>안녀어어엉어어ㅓ어어어어엉</h3>`;
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>
<div id="app">${data}</div>
</body>
</html>
`;
app.get("/", (req, res) => {
    res.send(html);
});
//# sourceMappingURL=index.js.map