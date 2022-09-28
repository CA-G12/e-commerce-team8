const { getCartProductsQuery } = require('../../database/queries');

const getCartProducts = (req, res, next) => {
    const userId = req.data.id;
    const {username} = req.data
    getCartProductsQuery({ userId })
     .then((data) => res.status(200).json({ data : data.rows, username }))
     .catch((err) => next(err))
}

module.exports = getCartProducts;