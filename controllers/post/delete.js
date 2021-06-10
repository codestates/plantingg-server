const { post } = require("../../models");

module.exports = {
    delete: async (req, res) => {
        await post.destroy({
            where: { id: req.body.id }
        });
    }
}