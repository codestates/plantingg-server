const { Post } = require("../models");

module.exports = {
  read: async (req, res) => {
    const { posts } = req.body;
    if (!posts) {
      res.status(400).send({ message: "게시물이 없습니다." });
    }
    const readPost = await Post.findOne({
      where: {},
    });
    res.status(200).send(readPost);
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
      id: req.currentUserId,
    });
    res.status(200).send(uploadPost);
  },

  update: async (req, res) => {
    const { content, image, tag } = req.body;
    if (!content || !image || !tag) {
      res.status(400).send({ message: "변경사항이 없습니다." });
    }

    const updatePost = await Post.update(
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
    await Post.destroy({
      where: { id: req.body.id },
    });
  },
};
