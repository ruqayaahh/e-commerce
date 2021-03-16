// CREATE TYPE your_enum AS ENUM('male', 'female');
// owner_username varchar (100) REFERENCES app_user not null,
module.exports = {
  createProductTable: `
      CREATE TABLE IF NOT EXISTS products (
        id uuid PRIMARY KEY,
        ownerid uuid REFERENCES app_user not null,
        business_name varchar(255) not null,
        productname varchar(100) not null,
        category varchar(100) not null,
        productdescription varchar(100) not null,
        size varchar(2),
        price varchar(100),
        instock int,
        productlocation varchar(100) not null,
        avg_rating smallint not null check (avg_rating > 0),
        created_at TIMESTAMPTZ default now(),
        updated_at TIMESTAMPTZ default now()
      );`,

  insertProductDetails: `
      insert into products (
        id,
        ownerid,
        productname,
        productdescription,
        size,
        merchant,
        instock,
        productlocation,
        rating,
      ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;`,

  createRatingsTable: `
    CREATE TABLE IF NOT EXISTS product_ratings (
      id uuid PRIMARY KEY REFERENCES products (id),
      ratings integer [],
      avgrating smallint not null check (avgrating > 0),
    );`,

  insertIntoRatingsTable: `
    insert into product_ratings (
      id,
      product_id,
      rating,
      avgrating,
    ) values ($1, $2, {$1, $2, $3}, $4)
    RETURNING avgrating;`,

  fetchProductById: 'SELECT * FROM products WHERE id = $1',
  fetchUserByEmail: 'SELECT * FROM app_user WHERE email = $1',
  updatePhone: `
      UPDATE app_user
      SET
      phonenumber = $1,
      updated_at=NOW()
      WHERE username = $2;`,
};
