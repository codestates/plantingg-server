const { Plant } = require("../models");

module.exports = {
  create: async (req, res) => {
    const { name, image } = req.body;
    if (!name || !image) {
      res.status(400).send({ message: "이름과 사진을 입력하세요." });
    }

    const uploadPlant = await Plant.create({
      name,
      image,
    });
    res.status(200).send(uploadPlant);
  },

  update: async (req, res) => {
    const { name, image } = req.body;
    if (!name || !image) {
      res.status(400).send({ message: "변경사항이 없습니다." });
    }

    const updatePlant = await Plant.update(
      {
        name,
        image,
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
