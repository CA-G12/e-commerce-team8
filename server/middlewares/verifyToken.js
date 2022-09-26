const { GenerateError } = require('../utils/customError');
const { verifyToken } = require('../utils/tokenPromise')


const authenticate = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        const newerror = new GenerateError(401, 'UnAuthorized')
        next(newerror);
    } else {
        verifyToken(token)
            .then(decoded => {
                req.data = decoded;
                next()
            })
            .catch((err) => {
                const newerror = new GenerateError(401, 'UnAuthorized');
                next(newerror);
            })
    }
};
module.exports = authenticate;