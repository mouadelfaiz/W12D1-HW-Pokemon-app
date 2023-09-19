const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");

const pokemons = require("./models/pokemon");
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});


app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!!!");
});

app.get("/pokemon/", function (req, res) {
  res.render("pokemon/Index", {pokemons: pokemons});
});




app.post("/pokemon", (req, res) => {
  pokemons.push(req.body);
  res.redirect("/pokemon");
});

app.get("/pokemon/:id", (req, res) => {
  res.render("pokemon/Show", {
    pokemon: pokemons[req.params.id],
  });
});

app.listen(3000, () => {
  console.log("listening");
});
