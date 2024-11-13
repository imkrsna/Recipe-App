// info logging
const info = (...parms) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(parms);
  }
}

// error logging
const error = (...parms) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(parms);
  }
}

// exporting functions 
module.exports = { info, error }