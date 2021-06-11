const { User } = require("../../models");

module.exports = {
  get: async (req, res) => {
    if (!req.currentUserId) {
      res.status(403).send({ message: "존재하지 않는 유저입니다." });
    } else {
      const userInfo = await User.findOne({
        where: { id: req.currentUserId },
      });
      res.status(200).send(userInfo);
    }
  },
};
