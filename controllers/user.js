const { User } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = {
  userInfo: async (req, res) => {
    if (!req.currentUserId) {
      res.status(403).send({ message: "존재하지 않는 유저입니다." });
    } else {
      const userInfo = await User.findOne({
        where: { id: req.currentUserId },
      });
      res.status(200).send(userInfo);
    }
  },

  signIn: async (req, res) => {
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

  signUp: async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).send({ message: "회원정보를 모두 입력하세요." });
    }

    const [signUpUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { username, email, password },
    });

    if (!created) {
      res.status(409).send({ message: "이미 존재하는 이메일입니다." });
    } else {
      res.status(201).send(signUpUser);
    }
  },

  profileImage: async (req, res) => {
    const { profileImage } = req.body;
    if (!profileImage) {
      res.status(400).send({ message: "사진을 업로드하세요." });
    }

    const profileImage = await User.create({
      profileImage,
    });
    res.status(200).send(profileImage);
  },

  statusMessage: async (req, res) => {
    const { statusMessage } = req.body;
    const statusMessage = await User.create({
      where: { statusMessage },
    });

    if (!statusMessage) {
      res.status(400).send({ message: "내용을 입력하세요." });
    } else {
      res.status(200).send(statusMessage);
    }
  },

  userEdit: async (req, res) => {
    const { username, profileImage, statusMessage } = req.body;
    const userInfo = await user.update(
      {
        username,
        profileImage,
        statusMessage,
      },
      {
        where: { id: req.body.id },
      }
    );

    if (!username || !profileImage || !statusMessage) {
      res.status(400).send({ message: "변경사항이 없습니다." });
    } else {
      res.status(200).send(userInfo);
    }
  },
};
