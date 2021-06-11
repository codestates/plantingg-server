// profileImage 업로드하면 서버에 저장

const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const { profileImage } = req.body;
    if (!profileImage) {
      res.status(400).send({ message: "사진을 업로드하세요." });
    }

    const profileImage = await User.create({
      profileImage,
    });
    res.status(200).send(profileImage);
  },
};
