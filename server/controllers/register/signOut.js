const signUp = (req, res) => {
    res.clearCookie('token').send({ message: ' You signed Out ' })
}
module.exports = signUp;