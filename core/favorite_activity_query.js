const connect = require('./connect')
const favoriteSchema = require('../schemas/favorite_activity_schema.js')


module.exports = {
    insertFavoriteQuery: async (data) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                const dataResult = await new favoriteSchema(data).save()
                response.payload.data = dataResult
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })
    },
    getAllFavoriteQuery: async () => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await favoriteSchema.find(
                    {},
                    '-__v',
                )
                response.payload.data = dataResult
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })
    },
    deleteFavoriteQueryById: async (id) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await favoriteSchema.deleteOne({ activity_id : id })
                response.payload.data = dataResult
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })
    },

      
    getFavoriteByUserId: async (id) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await favoriteSchema.find(
                    { user_id: id },
                    '-__v',
                )
                response.payload.data = dataResult
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })

    }
}
