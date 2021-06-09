// 상태메시지 수정버튼(연필 아이콘) 클릭해서 내용을 적으면 서버에 저장
// 수정하면 또 변경해서 저장

const { user } = require('../../models');

module.exports = {
    post: async (req, res) => {
        const statusMessage = await user.create({
            where: { statusMessage: req.body.statusMessage }
        })
        // if
    }
}