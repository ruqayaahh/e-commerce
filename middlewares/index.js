const {
  checkIfUserExists,
  validateSignUp,
  validateLogin,
} = require('./user');

const authenticate = require('./auth');

const { validateProduct } = require('./product');

module.exports = {
  checkIfUserExists,
  validateSignUp,
  validateLogin,
  authenticate,
  validateProduct,
};
