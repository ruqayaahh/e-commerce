const db = require('../db/setup');
const {
  insertAppUser,
  fetchUserByUsername,
  fetchUserById,
  fetchUserByEmail,
} = require('../db/queries/user');

const { generateUUID } = require('../utils/helpers');

const getSingleUserByUsername = async (username) => db.oneOrNone(fetchUserByUsername, [username]);

const getSingleUserById = async (id) => db.oneOrNone(fetchUserById, [id]);

const getSingleUserByEmail = async (email) => db.oneOrNone(fetchUserByEmail, [email]);

const addnewUser = async (data) => {
  const id = generateUUID();
  const {
    firstname, lastname, username, email, password, gender, location,
  } = data;
  return db.one(insertAppUser, [id,
    firstname, lastname, username, email, password, gender, location]);
};

module.exports = {
  getSingleUserByUsername,
  getSingleUserById,
  getSingleUserByEmail,
  addnewUser,
};
