// importing modules
const logger = require('./utils/logger');
const config = require('./utils/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const { errorHandler, unknownEndpoint } = require('./utils/middleware');
const RecipeRouter = require('./controllers/recipes');

// setting up mongodb
mongoose.set('strictQuery', false);
logger.info('connecting to', config.MONGODB_URI);
mongoose.connect(config.MONGODB_URI)
  .then(() => logger.info('conntected to database!'))
  .catch((err) => logger.error('error while connecting to database', err.message));

// creating server
const app = express();

// setting up morgan
morgan.token('content', (req, res) => JSON.stringify(req.body));

// applying middlewares
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(morgan(':method :url :status :response-time ms - :res[content-length] - :content'));

// adding routes
app.use('/api/recipe', RecipeRouter);

// custom middlewares
app.use(unknownEndpoint);
app.use(errorHandler);

// exporting server
module.exports = app;