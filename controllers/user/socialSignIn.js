const { User } = require("../../models");

module.exports = async (req, res) => {
  const { email, googleData } = req.body;
  const signInUser = await User.findOne({
    where: { email },
  });

  if (signInUser) {
  }
};
