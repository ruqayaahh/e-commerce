const { getSingleUserByUsername, getSingleUserByEmail } = require('../services');

const { userSignUpSchema, userloginSchema } = require('../validation');

const validateSignUp = (req, res, next) => {
  try {
    const { error } = userSignUpSchema.validate(req.body);
    if (!error) {
      return next();
    }
    return res.status(400).json({
      status: 'Fail',
      message: error.message,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Somethings def went wrong.',
    });
  }
};
const checkIfUserExists = async (req, res, next) => {
  try {
    const userName = await getSingleUserByUsername(req.body.username);
    const userEmail = await getSingleUserByEmail(req.body.email);
    if (!userName || !userEmail) {
      return next();
    }
    return res.status(409).json({
      status: 'Fail',
      message: 'User already exists.',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Oops Something went wrong.',
    });
  }
};

const validateLogin = (req, res, next) => {
  try {
    const { error } = userloginSchema.validate(req.body);
    if (!error) {
      return next();
    }
    return res.status(400).json({ status: 'fail', message: error.message });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = {
  checkIfUserExists,
  validateSignUp,
  validateLogin,
};
