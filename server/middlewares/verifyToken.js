const jwt = require('jsonwebtoken');
const { GenerateError } = require('../utils/customError');

const { SECRET_KEY } = process.env;

const authenticate = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        const newerror = new GenerateError(401, 'UnAutherized')
        next(newerror);
    } else {
        jwt.verify(token, SECRET_KEY, (error, encoded) => {
            if (error) {
                const newerror = new GenerateError(401, 'UnAutherized')
                next(newerror);
            }
            else {
                const userData = encoded;
                next(userData);
            }
        })
    }
};
module.exports = authenticate;