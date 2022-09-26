const { buyProductQuery } = require('../../database/queries/products');

const buyProduct = (req, res, next) => {
    const { productID } = req.params;
    const { id } = req.data;
    buyProductQuery({ productID, id })
        .then(() => res.status(200).json({ message: 'added to cart successfully' }))
        .catch((err) => next(err));
}

module.exports = buyProduct;