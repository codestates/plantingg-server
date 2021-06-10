const { post } = require("../../models");

module.exports = {
    post: async (req, res) => {
        const { content, image, tag } = req.body;
        if (!content || !image || !tag) {
            res.status(400).send({ message: "내용을 입력하세요." });
        }
        
        const uploadPost = await post.create({
            content, image, tag
        });
        res.status(200).send(uploadPost);
    }
}