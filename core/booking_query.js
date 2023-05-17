const connect = require('./connect')
const bookingSchema = require('../schemas/booking_schema.js')


module.exports = {
    insertBookingQuery: async (data) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                const dataResult = await new bookingSchema(data).save()
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
    getBookingQueryById: async (id) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await bookingSchema.findOne(
                    { _id: id },
                    '-__v',
                )
                response.payload.data = [dataResult]
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })
    },
    getAllBookingQuery: async () => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await bookingSchema.find(
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
    deleteBookingQueryById: async (id) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await bookingSchema.deleteOne({ _id: id })
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
    updateBookingQueryById: async (id, data) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await bookingSchema.findOneAndUpdate({ _id: id }, data)
                let findResult = await bookingSchema.findOne(
                    { _id: id },
                    '-__v',
                )
                response.payload.old_data = dataResult
                response.payload.new_data = findResult
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })
    },
    getBookingByUserId: async (id) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await bookingSchema.find(
                    { booking_user_id: id },
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
    getBookingByUserId: async (id) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await bookingSchema.find(
                    { activity_id: id },
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
