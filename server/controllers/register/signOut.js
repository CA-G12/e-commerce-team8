const signOut = (req, res) => {
    const { username } = req.data;
    res.clearCookie('token').send({ message: `See you later ${username}` });
}
module.exports = signOut;