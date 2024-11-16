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
  logger.error('ERROR:', err.message);

  // handle erros here
  if (err.name === 'CastError') {
    return res.status(404).json({success: false, data: `ID Not Found!`});
  } else if (err.name === 'ValidationError') {
    return res.status(402).json({success: false, data: 'Bad Request!'});
  }

  next(err);
};

// exporting middlewares
module.exports = {
  unknownEndpoint,
  errorHandler
}