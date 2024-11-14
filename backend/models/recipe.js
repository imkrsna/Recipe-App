// importing modules
const mongoose = require('mongoose');

// defining recipe schema
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    id: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  cuisine: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  prepTime: {
    type: Number,
    required: false,
  },
  cookTime: {
    type: Number,
    required: false,
  },
  ingredients: {
    type: [String],
    required: false,
  },
  instructions: {
    type: [String],
    required: false,
  },
  ratings: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    require: true
  }
});

// creating Recipe object
const Recipe = new mongoose.model("Recipe", recipeSchema);

// exporting model
module.exports = Recipe;