const { User } = require("../../models");

module.exports = async (req, res) => {
  const { username, email, googleData } = req.body;
  const [signUpUser, created] = await User.findOrCreate({
    where: { username, email, googleData },
  });

  if (!signUpUser) {
  }
};
