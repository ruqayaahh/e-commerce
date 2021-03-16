const db = require('../db/setup');
const {
  insertProductDetails,
  fetchProductById,
} = require('../db/queries/product');

// const { getSingleUserById } = require('./user');

const { generateUUID } = require('../utils/helpers');

const addNewProduct = async (data, ownerid) => {
  try {
    const id = generateUUID();
    const {
      productname, productdescription, size, merchant, instock, productlocation,
    } = data;
    // const { id } = user;
    const rating = 0;
    console.log('me');
    return db.one(insertProductDetails,
      [id, ownerid, productname, productdescription, size,
        merchant, instock, productlocation, rating]);
  } catch (error) {
    return console.log('fail', error);
  }
};

const getProductById = async (id) => db.oneOrNone(fetchProductById, [id]);

module.exports = {
  addNewProduct,
  getProductById,
};
