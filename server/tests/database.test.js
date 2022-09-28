const bcrypt = require("bcrypt");
const build = require("../database/config/build");
const addProducts = require("../database/config/productBuild");
const connection = require("../database/config/connection");

const {
  buyProductQuery,
  deleteProductQuery,
  getAllProductsQuery,
  getCartProductsQuery,
  signUpQuery,
  checkEmailQuery,
  getProductQuery,
} = require("../database/queries");

beforeAll(() => build().then(() => addProducts()));

afterAll(() => connection.end());

describe("Test auth queries", () => {
  it("Test create user query", () => {
    const name = "Joe Doe";
    const email = "jest@gmail.com";
    const hash = bcrypt.hashSync("0123456789", 10);
    return signUpQuery({ name, email, hash })
      .then((data) => data.rows[0])
      .then((user) => {
        expect(user.id).toBeGreaterThan(0);
        expect(user.username).toMatch(name);
        expect(user.email).toMatch(email);
        expect(user.password).toMatch(hash);
      });
  });

  it("Test create user query with missing parameter", () => {
    const name = "Joe Doe";
    const hash = bcrypt.hashSync("0123456789", 10);
    return expect(() => signUpQuery({ name, hash })).reject;
  });

  it("Test create user query with duplicate email", () => {
    const name = "Joe Doe";
    const email = "jest@gmail.com";
    const hash = bcrypt.hashSync("0123456789", 10);
    return expect(() => signUpQuery({ name, email, hash })).rejects.toThrow();
  });
  it("Test sign in user query", () => {
    const name = "Joe Doe";
    const email = "jest@gmail.com";
    return checkEmailQuery({ email })
      .then((data) => data.rows[0])
      .then((user) => {
        expect(user.id).toBeGreaterThan(0);
        expect(user.username).toMatch(name);
        expect(user.email).toMatch(email);
      });
  });
  it("Test sign in user query with non existing user", () => {
    const email = "dummy@gmail.com";
    return checkEmailQuery({ email })
      .then((data) => data.rows[0])
      .then((user) => {
        expect(user).toBeFalsy();
      });
  });
  it("Test sign in user query with no parameter", () =>
    expect(() => checkEmailQuery()).reject);
});

describe("Test products queries:", () => {
  it("Get all products query", () =>
    getAllProductsQuery()
      .then((data) => data.rows)
      .then((products) => {
        expect(products.length).toBeGreaterThan(0);
      }));
  it("Get single product detail query", () =>
    getProductQuery({ id: 15 })
      .then((data) => data.rows[0])
      .then((product) => {
        expect(product.id).toBe(15);
        expect(product.title).toBeTruthy();
        expect(Number(product.price)).toBeGreaterThanOrEqual(0);
        expect(product.imgurl).toBeTruthy();
        expect(product.category).toBeTruthy();
        expect(product.description).toBeTruthy();
      }));
  it("Get single product detail query with wrong id", () =>
    getProductQuery({ id: -1 })
      .then((data) => data.rows[0])
      .then((product) => {
        expect(product).toBeUndefined();
      }));
  it("Get single product detail query with bad request id", () => {
    getProductQuery({ id: "first" })
      .then((data) => data.rows[0])
      .then((product) => {
        expect(product).toBeUndefined();
      })
      .catch((err) => {
        expect(err.code).toBe("22P02");
      });
  });

  it("Buy product query", () =>
    buyProductQuery({ productID: 2, id: 1 })
      .then((data) => data.rows[0])
      .then((product) => {
        expect(product).toHaveProperty("id");
      }));
  it("Delete product query", () =>
    deleteProductQuery(1, 2)
      .then((data) => data.rows[0])
      .then((product) => {
        expect(product).toHaveProperty("id");
      }));
});
