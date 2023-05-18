const {
    getAllChatByRoomIDQuery
} = require('../core/message_query')
const { successValidator } = require('../functions/functions')

module.exports = {
    getAllChatByRoomID: async (id) => {
        try {
            let response = await getAllChatByRoomIDQuery(id)
            return successValidator(
                response,
                'Get all data successful.',
                'Failed to get all data.',
            )
        } catch (err) {
            console.log(err)
        }
    },
}
