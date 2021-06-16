const { Plant } = require("../models");

module.exports = {
  read: async (req, res) => {
    const list = await Plant.findOne({
      where: { userId: req.currentUserId },
    });
    return res.status(200).send(list);
  },

  create: async (req, res) => {
    const { userId, name, image } = req.body;
    if (!name || !image) {
      return res.status(400).send({ message: "이름과 사진을 입력하세요." });
    }

    const uploadPlant = await Plant.create({
      userId: req.currentUserId,
      name,
      image,
    });
    return res.status(200).send(uploadPlant);
  },

  update: async (req, res) => {
    const { name, image } = req.body;
    const updatePlant = await Plant.update(
      {
        userId: req.currentUserId,
        name,
        image,
      },
      {
        where: { id: req.body.id },
      }
    );
    return res.status(200).send(updatePlant);
  },

  delete: async (req, res) => {
    const { id } = req.body;
    await Plant.destroy({
      where: { id: req.body.id },
    });
    return res
      .status(200)
      .send({ message: `${id}번째 게시물을 삭제했습니다.` });
  },
};
