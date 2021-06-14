<<<<<<< HEAD
const { plant } = require("../models");
=======
const { plant } = require("../../models");
>>>>>>> cad006cd92be485d42a61317223d32ad91e8dbab

module.exports = {
  create: async (req, res) => {
    const { name, image } = req.body;
    if (!name || !image) {
      res.status(400).send({ message: "이름과 사진을 입력하세요." });
    }

    const uploadPlant = await plant.create({
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

    const updatePlant = await plant.update(
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
    await plant.destroy({
      where: { id: req.body.id },
    });
  },
};
