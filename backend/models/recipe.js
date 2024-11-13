// importing modules
const mongoose = require('mongoose');

// defining recipe schema
const recipeSchema = new mongoose.Schema({
  name: String,
  author: String,
  cuisine: String,
  category: String,
  prepTime: Number,
  cookTime: Number,
  ingredients: [String],
  instructions: [String],
  ratings: Number,
  date: Date
});

// creating Recipe object
const Recipe = new mongoose.model("Recipe", recipeSchema);

// exporting model
module.exports = Recipe;