// My page
// 내 식물 추가 버튼 누르면 추가한 내용 서버에 저장
// 삭제 버튼 누르면 서버에서 삭제
const { plant } = require("../../models");

module.exports = {
    post: async (req, res) => {
        const addPlant = await plant.create({ // 이름 추가
            image: a,
        })

        const updatePlant = await plant.update({ // 삭제 추가
            image: a,
        }, { where: { } })

        if (addPlant !== null) {
            res.status(200).send(lists);
        } else {
            res.status(404).send({ message: "보유한 식물이 없습니다." })
        }
    }
}