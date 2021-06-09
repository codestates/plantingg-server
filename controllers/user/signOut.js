module.exports = {
    post: async (req, res) => {
        if (!req.session.email) {
            res.status(400).send({ message: "로그인 상태가 아닙니다." })
        } else {
            req.session.destroy();
            res.status(200).send({ message: "로그아웃 되었습니다." })
        }
    }
}