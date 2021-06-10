const { plant } = require("../../models");

module.exports = {
    delete: async (req, res) => {
        await plant.destroy({
            where: { id: req.body.id }
        });
    }
}