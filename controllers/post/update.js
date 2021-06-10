const { post } = require("../../models");

module.exports = {
    patch: async (req, res) => {
        const { content, image, tag } = req.body;
        if (!content || !image || !tag) {
            res.status(400).send({ message: "변경사항이 없습니다." });
        }
        
        const updatePost = await post.update({
            content, image, tag
        }, {
            where: { id: req.body.id }
        });
        res.status(200).send(updatePost);
    }
}