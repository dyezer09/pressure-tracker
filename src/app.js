import express from "express" // get express
import path from "path"
import { fileURLToPath } from "url";
import { engine } from 'express-handlebars';



const app = express();
const __filename = fileURLToPath(import.meta.url) // get path to app.js
const __dirname = path.dirname(__filename) // path to app.js whithout app.js

app.engine('.hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.resolve(__dirname, './views/layouts'),
  partialsDir: path.resolve(__dirname, './views/partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, './views'));
const port = 5500;
app.use(express.static(path.join(__dirname, "../dist")))


app.get("/:slug?", (req, res) => {
  let slug = req.params.slug
  if (slug === undefined) slug = "home"
  res.render("pages/" + slug, { title: slug });
});

app.get("/bs5/:slug?", (req, res) => {
  let slug = req.params.slug
  if (slug === undefined) slug = "index"
  res.render("pages/bs5/" + slug, { layout: 'main2', title: slug });
});

app.get("/all", (req, res) => {
  res.sendFile(__dirname + "/pages/all.html");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
