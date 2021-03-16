const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const secret = process.env.SECRET;

const addTokenToData = (data) => jwt.sign(data, secret, { expiresIn: '1h' });

const verifyToken = (token) => jwt.verify(token, secret, (error, data) => ({ error, data }));

const generateUUID = () => uuid();

const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => bcrypt.hashSync(password, salt);

const comparePassword = (plainPassword,
  hashedPassword) => bcrypt.compareSync(plainPassword, hashedPassword);

module.exports = {
  generateUUID,
  hashPassword,
  comparePassword,
  addTokenToData,
  verifyToken,
};
