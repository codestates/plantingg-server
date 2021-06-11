// 상태메시지 입력하면 서버에 저장

const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
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
};
