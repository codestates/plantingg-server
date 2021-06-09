// 회원가입 할 때 적었던 username이 서버에 저장되어 있다.
// 저장된 username을 프로필에 불러오기
// username을 수정하면 서버에 변경해서 저장

const { user } = require('../../models');

module.exports = {
    post: async (req, res) => {
        const username = await user.findOne({
            where: {}
        })
    }
}