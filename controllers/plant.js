const { Plant } = require("../models");

module.exports = {
  read: async (req, res) => {
    const list = await Plant.findOne({
      where: { userId: req.currentUserId },
    });
    res.status(200).send(list);
  },

  create: async (req, res) => {
    const { userId, name, image } = req.body;
    if (!name || !image) {
      res.status(400).send({ message: "이름과 사진을 입력하세요." });
    }

    const uploadPlant = await Plant.create({
      userId: req.currentUserId,
      name,
      image,
      currentUserId: req.currentUserId,
    });
    res.status(200).send(uploadPlant);
  },

  update: async (req, res) => {
    const { name, image } = req.body;
    const updatePlant = await Plant.update(
      {
        userId: req.currentUserId,
        name,
        image,
        currentUserId: req.currentUserId,
      },
      {
        where: { id: req.body.id },
      }
    );
    res.status(200).send(updatePlant);
  },

  delete: async (req, res) => {
    await Plant.destroy({
      where: { id: req.body.id },
    });
  },
};
