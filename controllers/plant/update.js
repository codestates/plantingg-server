const { plant } = require("../../models");

module.exports = {
    patch: async (req, res) => {
        const { name, image } = req.body;
        if (!name || !image) {
            res.status(400).send({ message: "변경사항이 없습니다." })
        }

        const updatePlant = await plant.update({
            name, image
        }, {
            where: { id: req.body.id }
        });
        res.status(200).send(updatePlant);
    }
}