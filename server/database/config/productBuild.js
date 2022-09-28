const connection = require("./connection");
const products = require("./products");

const insertProduct = (title, price, imgUrl, category, description) =>
  connection.query(
    `INSERT INTO products (title,price,imgUrl,category,description) VALUES ($1,$2,$3,$4,$5)`,
    [title, price, imgUrl, category, description]
  );

const addProducts = () => {
  products.forEach((ele) => {
    insertProduct(
      ele.title,
      ele.price,
      ele.imgURL,
      ele.category,
      ele.category,
      ele.description
    );
  });
};

module.exports = addProducts;
