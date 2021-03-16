const { productSchema } = require('../validation');

const validateProduct = (req, res, next) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (!error) {
      return next();
    }
    return res.status(400).json({
      status: 'Fail',
      message: error.message,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something yaf gone wrong',
    });
  }
};

module.exports = {
  validateProduct,
};
