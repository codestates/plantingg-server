const { user } = require("../../models");

module.exports = {
    post: async (req, res) => {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).send({ message: "회원정보를 모두 입력하세요." }); 
        }

        const [signUpUser, created] = await user.findOrCreate({
            where: { email }, defaults: { username, email, password }
        });

        if (!created) {
            res.status(409).send({ message: "이미 존재하는 이메일입니다." });
        } else {
            res.status(201).send(signUpUser);
        }
    }
}