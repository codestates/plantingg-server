const { User } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({ message: "이메일이나 비밀번호를 확인하세요." });
    }

    const signInUser = await User.findOne({
      where: { email, password },
    });

    if (!signInUser) {
      res.status(404).send({ message: "일치하는 유저가 없습니다." });
    }

    const accessToken = jwt.sign(
      { id: signInUser.id, email: signInUser.email },
      process.env.ACCESS_SECRET,
      {
        expiresIn: "1h",
      }
    );
    const refreshToken = jwt.sign(
      { id: signInUser.id, email: signInUser.email },
      process.env.REFRESH_SECRET,
      {
        expiresIn: "30d",
      }
    );

    res.status(200).send({
      data: { accessToken: accessToken, refreshToken: refreshToken },
      message: "로그인 되었습니다.",
    });
  },
};
