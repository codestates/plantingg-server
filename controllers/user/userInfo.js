// 회원가입할 때 이미 서버에 저장된 username, email을 불러온다.
const { user } = require('../../models');

module.exports = {
    get: async (req, res) => {
        if (!req.session.userId) {
            res.status(404).send({ message: "존재하지 않는 유저입니다." });
        } else {
            const userInfo = await user.findOne({
                where: { id: req.session.userId }
            });
            res.status(200).send(userInfo);
        }
    }
}