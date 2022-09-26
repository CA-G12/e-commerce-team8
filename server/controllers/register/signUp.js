const bcrypt = require('bcrypt');

const { signUpQuery, checkEmailQuery } = require('../../database/queries');
const { GenerateError } = require('../../utils/customError');
const { signUpValidation } = require('../../validation');
const { generateToken } = require('../../utils/tokenPromise')


const signUp = (req, res, next) =>{
    const {
        name,
        email,
        password,
    } = req.body;

    signUpValidation.validateAsync(req.body)
    .then((result) => result)
    .catch((err) => {
        throw new GenerateError(400, err.details[0].message)
    })
    .then(() => checkEmailQuery({ email }))
    .then((data) => {
        if(data.rowCount) throw new GenerateError(400, 'email already exists')
        else return bcrypt.hash(password, 10)
    })
    .then((hash) => signUpQuery({ name, email, hash }))
    .then((data) => {
        const { id, username } = data.rows[0]
        const payload = { id, username };
        return generateToken(payload)
    })
    .then((token) => {
        res.cookie('token', token, {httpOnly : true})
        .status(200)
        .json({ message : 'Welcome To Our Website' })
    })
    .catch((err) => next(err))
}

module.exports = signUp;