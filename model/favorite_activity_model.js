const {
    insertFavoriteQuery,
    getAllFavoriteQuery,
    deleteFavoriteQueryById,
    getFavoriteByUserId
} = require('../core/favorite_activity_query')
const { successValidator } = require('../functions/functions')

module.exports = {
    insertFavorite: async (data) => {
        try {
            let response = await insertFavoriteQuery(data)
            return successValidator(
                response,
                'Insert successful.',
                'Insert failed.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    getAllFavorite: async (id) => {
        try {
            let response = await getAllFavoriteQuery(id)
            return successValidator(
                response,
                'Get all data successful.',
                'Failed to get all data.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    deleteFavoriteById: async (id) => {
        try {
            let response = await deleteFavoriteQueryById(id)
            return successValidator(
                response,
                'data delete successful.',
                'Failed to delete data.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    getFavoriteByUserId: async (id) => {
        try {
            let response = await getFavoriteByUserId(id)
            return successValidator(
                response,
                'Get data successful.',
                'Failed to get data.',
            )
        } catch (err) {
            console.log(err)
        }
    }
}
