const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
dotenv.config();



// POKEMON SCHEMA MODEL
const Pokemon = require("./models/pokemons.js");
//BODY PARSER - TO READ FROM THE FORM
app.use(express.urlencoded({ extended: false }));
// METHOD OVERRIDE FOR FORM TO CREATE A DELETE REQUEST
app.use(methodOverride("_method"));
// FOR HOSTING STATIC FILES
app.use(express.static("public"));
// VIEW TEMPLATE ENGINE
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// GLOBAL CONFIGURATION
const mongoose = require('mongoose');

async function connectToMongo() {
  try {
    const mongoUri = process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
    console.log('Mongo connected:', mongoUri);
  } catch (err) {
    console.error('Mongo connection error:', err.message);
  }
}

const db = mongoose.connection;
db.on('error', (err) => console.error(err.message + ' is Mongod not running?'));
db.on('close', () => console.log('Mongo disconnected'));

connectToMongo();

app.get("/", (req, res) => {
  res.render("pokemon/Home");
});

// INDEX

app.get("/pokemon/", async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.render("pokemon/Index", { pokemons: pokemons });
  } catch (error) {
    console.log(error);
  }
});

// NEW

app.get("/pokemon/new", (req, res) => {
  res.render("pokemon/New");
});

// DELETE

app.delete("/pokemon/:id", async (req, res) => {
  try {
    await Pokemon.findByIdAndRemove(req.params.id);
    res.redirect("/pokemon");
  } catch (error) {
    console.log(error);
  }
});

// UPDATE

app.put("/pokemon/:id", async (req, res) => {
  try {
    await Pokemon.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/pokemon");
  } catch (error) {
    console.log(error);
  }
});

// CREATE

app.post("/pokemon", async (req, res) => {
  try {
    await Pokemon.create(req.body);
    res.redirect("/pokemon");
  } catch (error) {
    console.log(error);
  }
});

// EDIT

app.get("/pokemon/:id/edit", async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.render("pokemon/Edit", { pokemon: foundPokemon });
  } catch (error) {
    console.log(error);
  }
});

// SHOW

app.get("/pokemon/:id", async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    console.log("This is the Show Route");
    res.render("pokemon/Show", { pokemon: pokemon });
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening");
});
