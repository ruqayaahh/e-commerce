const {
  getSingleUserByUsername,
  getSingleUserByEmail,
  getSingleUserById,
  addnewUser,
} = require('./user');

const {
  addNewProduct,
} = require('./product');

module.exports = {
  getSingleUserByUsername,
  getSingleUserByEmail,
  getSingleUserById,
  addnewUser,
  addNewProduct,
};
