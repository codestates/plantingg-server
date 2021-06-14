const { post } = require("../models");

module.exports = {
  create: async (req, res) => {
    const { content, image, tag } = req.body;
    if (!content || !image || !tag) {
      res.status(400).send({ message: "내용을 입력하세요." });
    }

    const uploadPost = await post.create({
      content,
      image,
      tag,
    });
    res.status(200).send(uploadPost);
  },

  update: async (req, res) => {
    const { content, image, tag } = req.body;
    if (!content || !image || !tag) {
      res.status(400).send({ message: "변경사항이 없습니다." });
    }

    const updatePost = await post.update(
      {
        content,
        image,
        tag,
      },
      {
        where: { id: req.body.id },
      }
    );
    res.status(200).send(updatePost);
  },

  delete: async (req, res) => {
    await post.destroy({
      where: { id: req.body.id },
    });
  },
};
