// username 수정하면 변경해서 서버에 저장
// profileImage 수정하면 변경해서 서버에 저장
// statusMessage 수정하면 변경해서 서버에 저장
const { user } = require("../../models");

module.exports = {
    patch: async (req, res) => {
        const { username, profileImage, statusMessage } = req.body;
        const userInfo = await user.update({
            username, profileImage, statusMessage,
        },
        {
            where: { id: req.body.id }
        });

        if (!username || !profileImage || !statusMessage) {
            res.status(400).send({ message: "변경사항이 없습니다." });
        } else {
            res.status(200).send(userInfo);
        }
    }
}