const { addnewUser, getSingleUserByUsername } = require('../services');
const { hashPassword, addTokenToData, comparePassword } = require('../utils/helpers');

const registerUser = async (req, res) => {
  try {
    // const { password } = req.body;
    const hashedPassword = hashPassword(req.body.password);
    const userData = await addnewUser({
      ...req.body, password: hashedPassword,
    });
    res.status(201).json({
      status: 'Success',
      message: 'You have created an account successfully.',
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Somethings def gone went wrong.',
    });
  }
};

const loginUser = async (req, res) => {
  try {
    // const { username, password } = req.body;
    const userData = await getSingleUserByUsername(req.body.username);

    // const userDataTwo = await getSingleUserByEmail(email);
    // || (userDataTwo && userDataTwo.password === comparePassword(password, userDataTwo.password))
    // delete userDataTwo.password;

    if (userData && comparePassword(req.body.password, userData.password)) {
      delete userData.password;
      const token = addTokenToData({
        username: userData.username,
        email: userData.email,
        id: userData.id,
      });
      return res.status(200).json({ status: 'successful', message: 'Login successful.', data: { token, userData } });
    }
    return res.status(401).json({ status: 'fail', message: 'Invalid login details' });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something yaf went wrong.' });
  }
};
module.exports = {
  registerUser,
  loginUser,
};
