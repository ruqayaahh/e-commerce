// phonenumber,
// phonenumber varchar not null,
// CREATE TYPE your_enum AS ENUM('male', 'female');
module.exports = {
  createAppUserTable: `
  CREATE TABLE IF NOT EXISTS app_user (
    id uuid PRIMARY KEY,
    firstname varchar(100) not null,
    lastname varchar(100) not null,
    business_name varchar(100) not null,
    email varchar not null,
    password varchar not null,
    location varchar(100) not null,
    created_at TIMESTAMPTZ default now(),
    updated_at TIMESTAMPTZ default now(),
    UNIQUE (business_name, email)
    );`,

  insertAppUser: `
    insert into app_user (
      id,
      firstname,
      lastname,
      business_name,
      email,
      password,
      location
    ) values ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id, firstname, lastname, business_name, email, location, created_at;`,

  fetchUserByUsername: 'SELECT * FROM app_user WHERE username = $1',
  fetchUserById: 'SELECT * FROM app_user WHERE id = $1',

  fetchUserByEmail: 'SELECT * FROM app_user WHERE email = $1',

  updatePhone: `
    UPDATE app_user
    SET 
    phonenumber = $1,
    updated_at=NOW()
    WHERE username = $2;`,
};
