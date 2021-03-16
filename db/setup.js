const promise = require('bluebird');

const pgPromise = require('pg-promise');
require('dotenv').config();

const pgp = pgPromise({ promiseLib: promise, noLocking: true });

// const pgp = require('pg-promise')({
//   promiseLib: promise, noLocking: true,
// });

const cn = process.env.DB_URL;

const db = pgp(cn);

module.exports = db;
