const { addNewProduct } = require('../services');
const { getSingleUserByUsername } = require('../services');

const createProduct = async (req, res) => {
  try {
    const {
      productname,
      productdescription,
      size,
      merchant,
      instock,
      productlocation,
    } = req.body;
    // console.log(req.body);
    const user = await getSingleUserByUsername(merchant);
    const { id } = user;
    console.log(id);
    const product = await addNewProduct({
      productname,
      productdescription,
      size,
      merchant,
      instock,
      productlocation,
    }, id);
    console.log(product);
    res.status(201).json({
      status: 'Successful',
      message: 'Product successfully created',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong sister.',
    });
  }
};

module.exports = createProduct;
