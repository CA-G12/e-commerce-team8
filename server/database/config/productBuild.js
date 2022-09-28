/* eslint-disable spaced-comment */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const connection = require("./connection");
const products = require("./products");

const insertProduct = (title, price, imgUrl, category, description) =>
  connection.query(
    `INSERT INTO products (title,price,imgUrl,category,description) VALUES ($1,$2,$3,$4,$5)`,
    [title, price, imgUrl, category, description]
  );

products.forEach((ele) => {
  insertProduct(
    ele.title,
    ele.price,
    ele.imgURL,
    ele.category,
    ele.description
  );
});
