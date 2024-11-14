// importing modules
const express = require('express');

// setting up router
const Router = express.Router();

// creating routes
Router.get('/', (req, res) => {
  res.end('I am working brother!');
});

// exporting router
module.exports = Router;