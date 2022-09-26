const { GenerateError } = require('../utils/customError');
const { verifyToken } = require('../utils/tokenPromise')


const authenticate = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        const newError = new GenerateError(401, 'UnAuthorized')
        next(newError);
    } else {
        verifyToken(token)
            .then(decoded => {
                req.data = decoded;
                next()
            })
            .catch(() => {
                const newError = new GenerateError(401, 'UnAuthorized');
                next(newError);
            })
    }
};
module.exports = authenticate;