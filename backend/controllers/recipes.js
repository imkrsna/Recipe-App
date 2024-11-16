// importing modules
const express = require('express');
const Recipe = require('../models/recipe');

// setting up router
const Router = express.Router();

// getting all recipes
Router.get('/', async (req, res) => {
  const data = await Recipe.find();
  const result = {success: true, data: data};
  res.json(result);
});

// getting specific recpie
Router.get('/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const recipe = await Recipe.findOne({"_id": id});
    res.json({success: true, data: recipe});
  } catch (err) {
    next(err);
  }
});

Router.post('/', async (req, res, next) => {
  const body = req.body;
  const newRecipe = new Recipe({
    name: body.name,
    author: body.author,
    cusine: body.cusine,
    category: body.category,
    prepTime: body.prepTime,
    cookTime: body.cookTime,
    ingredients: body.ingredients,
    ratings: body.ratings,
    createdAt: new Date(),
  });
  
  try {
    const recipe = await newRecipe.save();
    res.json({success: true, data: recipe});
  } catch (err) {
    next(err);
  }
});

// delete recipe
Router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    await Recipe.findByIdAndDelete(id);
    res.status(402).json({success: true, data: 'Recipe Deleted!'});
  } catch (err) {
    next(err);
  }
});

// exporting router
module.exports = Router;