const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");

const pokemon = require("./models/pokemon");
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!!!");
});

app.get("/pokemon/", function (req, res) {
  res.render("pokemon/Index");
});

app.listen(3000, () => {
  console.log("listening");
});
