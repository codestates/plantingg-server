const { plant } = require("../../models");

module.exports = {
    post: async (req, res) => {
        const { name, image } = req.body;
        if (!name || !image) {
            res.status(400).send({ message: "이름과 사진을 입력하세요." })
        }

        const uploadPlant = await plant.create({
            name, image
        });
        res.status(200).send(uploadPlant);
    }
} 