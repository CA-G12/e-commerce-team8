const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/tokenPromise");
const { checkEmailQuery } = require("../../database/queries");
const { GenerateError } = require("../../utils/customError");
const { signInValidation } = require("../../validation");

const signIn = (req, res, next) => {
  const user = req.body;
  let dbUser = [];
  signInValidation
    .validateAsync(user)
    .then((result) => result)
    .catch((err) => {
      throw new GenerateError(400, err.details[0].message);
    })
    .then(() => checkEmailQuery(user))
    .then((data) => {
      if (data.rows.length) {
        dbUser = data.rows;
        return data.rows[0];
      }
      throw new GenerateError(400, "The email is not found");
    })
    .then((result) => bcrypt.compare(user.password, result.password))
    .then((same) => {
      if (!same) {
        throw new GenerateError(400, "The password is incorrect");
      }
      return user;
    })
    .then(() => {
      const payload = {
        id: dbUser[0].id,
        username: dbUser[0].name,
      };
      return generateToken(payload);
    })
    .then((token) =>
      res.cookie("token", token).status(200).json({ message: "welcome back" })
    )
    .catch((err) => next(err));
};

module.exports = signIn;
