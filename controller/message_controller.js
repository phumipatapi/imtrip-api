const {
    getAllChatByRoomID
} = require('../model/message_model')

module.exports = {
    getAllChatWithRoomID: async (req, res, next) => {
        try {
            const jsonResponse = await getAllChatByRoomID(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
}
