const { User } = require("../models");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).send({ message: "권한이 없습니다." });
  } else {
    try {
      const token = authorization.split(" ")[1];
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      if (data.username !== undefined) {
        res.status(401).send({ message: "올바르지 않은 인증정보입니다." });
      }

      const userInfo = await User.findOne({
        where: { email: data.email },
      });
      if (userInfo) {
        req.currentUserId = userInfo.id;
        next(null);
      } else {
        next(null, false, { message: "올바르지 않은 인증정보입니다." });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
};
