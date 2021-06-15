const { Post } = require("../models");

module.exports = {
  read: async (req, res) => {
    const list = await Post.findAll({
      where: { userId: req.currentUserId },
    });
    res.status(200).send(list);
  },

  create: async (req, res) => {
    const { content, image, tag } = req.body;
    if (!content || !image || !tag) {
      res.status(400).send({ message: "내용을 입력하세요." });
    }
    const uploadPost = await Post.create({
      content,
      image,
      tag,
      currentUserId: req.currentUserId,
    });
    res.status(200).send(uploadPost);
  },

  update: async (req, res) => {
    const { content, image, tag } = req.body;
    const updatePost = await Post.update(
      {
        content,
        image,
        tag,
        currentUserId: req.currentUserId,
      },
      {
        where: { id: req.body.id },
      }
    );
    res.status(200).send(updatePost);
  },

  delete: async (req, res) => {
    await Post.destroy({
      where: { id: req.body.id },
    });
  },
};
