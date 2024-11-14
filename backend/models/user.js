// importing modules
const mongoose = require('mongoose');

// defining user schema
const userSchema = new mongoose.Schema({
  usename: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    require: true
  }
});

// creating User model
const User = new mongoose.model('User', userSchema);

// exporting model
module.exports = User;