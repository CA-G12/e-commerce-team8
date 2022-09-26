const { getCartProductsQuery } = require('../../database/queries');

const getCartProducts = (req, res, next) => {
    const userId = req.data.id;
    getCartProductsQuery({ userId })
     .then((data) => res.status(200).json({ data : data.rows }))
     .catch((err) => next(err))
}

module.exports = getCartProducts;