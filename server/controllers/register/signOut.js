const signUp = (req, res) => {
    const { id } = req.data;
    res.clearCookie('token').send({ message: `Goodbye user${id}, we wish you a nice day ` });
}
module.exports = signUp;