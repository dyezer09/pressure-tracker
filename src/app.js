import express from "express" // get express
import path from "path"
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url) // get path to app.js
const __dirname = path.dirname(__filename) // path to app.js whithout app.js
const port = 5500;
app.use(express.static(path.join(__dirname, "../")))
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.get("/all", (req, res) => {
  res.sendFile(__dirname + "/pages/all.html");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
