const { user } = require("../../models");
module.exports = {
    post: async (req, res) => {
        const signInUser = await user.findOne({
            where: { email: req.body.email, password: req.body.password }
        })
        if (!signInUser) {
            res.status(404).send({ message: "이메일이나 비밀번호를 확인하세요." });
        } else {
            req.session.save(function () {
                req.session.email = signInUser.email;
                req.session.password = signInUser.password
                res.status(200).send({ message: "로그인 되었습니다." });
            })
        }
    }
}