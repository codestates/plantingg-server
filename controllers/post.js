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
    if (!content) {
      return res.status(400).send({ message: "내용을 입력하세요." });
    }

    const uploadPost = await Post.create({
      userId: req.currentUserId,
      content,
      image,
      tag,
    });
    return res.status(200).send(uploadPost);
  },

  // update: async (req, res) => {
  //   const { content, image, tag } = req.body;
  //   const updatePost = await Post.update(
  //     {
  //       userId: req.currentUserId,
  //       content,
  //       image,
  //       tag,
  //     },
  //     {
  //       where: { id: req.body.id },
  //     }
  //   );
  //   return res.status(200).send(updatePost);
  // },

  // delete: async (req, res) => {
  //   const { id } = req.body;
  //   await Post.destroy({
  //     where: { id },
  //   });
  //   return res
  //     .status(200)
  //     .send({ message: `${id}번째 게시물을 삭제했습니다.` });
  // },
};
