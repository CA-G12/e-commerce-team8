BEGIN;

DROP TABLE IF EXISTS users, products, cart CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    price INT,
    imgUrl VARCHAR(500),
    description TEXT
);

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

COMMIT;