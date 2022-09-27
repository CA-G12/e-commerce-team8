const { getProductQuery } = require('../../database/queries/products');

const getProductById = (req, res, next) => {
    const { id } = req.params;
    getProductQuery({ id })
        .then(product => product.rows)
        .then(data => res.json({ data }))
        .catch((err) => next(err))
}

module.exports = getProductById;