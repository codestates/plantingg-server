const { user } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
    const { email, googleData } = req.body;
    const signInUser = await user.findOne({
        where: { email }
    });

    if (signInUser) {

    }
}