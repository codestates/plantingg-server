const { user } = require("../../models");

module.exports = async (req, res) => {
    const { username, email, googleData } = req.body;
    const [signUpUser, created] = await user.findOrCreate({
        where: { username, email, googleData }
    });

    if (!signUpUser) {

    }

}