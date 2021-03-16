const Joi = require('joi');

const productSchema = Joi.object({
  productname: Joi.string().min(3).max(100).required(),
  category: Joi.string().valid('Education', 'Fashion', 'Travel & Tour', 'Technology', 'Home & Office').required(),
  productdescription: Joi.string().min(3).max(100).required(),
  size: Joi.string().valid('XS', 'S', 'M', 'L', 'XL'),
  price: {
    fee: Joi.number().min(50).required(),
    currency: Joi.string().valid('USD').required(),
  },
  instock: Joi.number().integer().min(0).max(2000),
  productlocation: Joi.string().min(3).max(100).required(),
});

module.exports = productSchema;

// Name: 'iPhone XS',
// Description: 'Sleek, beautiful and nice',
// size: 'XS',
// instock: 40,
// Merchant: 'Terrabyte',
// location: "Lagos"
// rating:"4.0"
