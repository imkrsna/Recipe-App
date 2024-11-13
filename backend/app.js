// importing modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./utils/logger');
const RecipeRouter = require('./controllers/recipes');

// creating server
const app = express();

// setting up morgan
morgan.token('Content', (req, res) => JSON.stringify(req.body));

// applying middlewares
app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :response-time ms - :res[content-length] - :content'));

// adding routes
app.use('/api/recipe', RecipeRouter);

// exporting server
module.exports = app;