// setting up dot env
require('dotenv').config();

// getting config variables
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.NODE_ENV === 'test'
? process.env.TEST_MONGODB_URI
: process.env.MONGODB_URI;

// exporting config variables
module.exports = {
  PORT,
  MONGODB_URI
};