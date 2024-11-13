// importing modules
const logger = require('./logger');
const express = require('express');

// setting unknown endpoint handler
const unknownEndpoint = (req, res) => {
  res.status(404).end('Page not found!');
};

// setting error handler
const errorHandler = (err, req, res, next) => {
  // logging error
  logger.error(err.message);

  // handle erros here

  next(err);
};

// exporting middlewares
module.exports = {
  unknownEndpoint,
  errorHandler
}