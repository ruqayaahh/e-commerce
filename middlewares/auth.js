const { verifyToken } = require('../utils/helpers');

const authenticate = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'You need to be signed in' });
    }
    const token = authorization.split(' ')[1];
    const { err, data } = verifyToken(token);
    if (err) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'You need to be signed in' });
    }
    req.user = data;
    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'fail', message: 'Something went wrong' });
  }
};

// const ownerAccessValidator = (req, res, next) => {
//   try {
//     if (req.) {
//       return next();
//     }
//     return res.status(403).json({ status: 'fail', message: 'Only admins can access this' });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ status: 'fail', message: 'Something went wrong' });
//   }
// };

module.exports = authenticate;
