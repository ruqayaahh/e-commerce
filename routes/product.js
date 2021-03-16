const { Router } = require('express');

const { createProduct } = require('../controllers');

const { authenticate, validateProduct } = require('../middlewares');

const productRouter = Router();

productRouter.post('/product', authenticate, validateProduct, createProduct);

module.exports = productRouter;
