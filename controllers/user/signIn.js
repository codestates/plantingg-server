const { user } = require("../../models");

module.exports = {
    post: async (req, res) => {
        const { email, password } = req.body;
        const signInUser = await user.findOne({
            where: { email, password }
        });
        
        if (!signInUser) {
            res.status(404).send({ message: "이메일이나 비밀번호를 확인하세요." });
        } else {
            req.session.save(function () {
                req.session.email = email;
                req.session.password = password;
                res.status(200).send({ message: "로그인 되었습니다." });
            })
        }
    }
}