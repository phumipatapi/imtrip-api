const {
    insertBookingQuery,
    getBookingQueryById,
    getAllBookingQuery,
    deleteBookingQueryById,
    updateBookingQueryById,
    getBookingByUserId,
    getBookingQueryByActivityId
} = require('../core/booking_query')
const { successValidator } = require('../functions/functions')

module.exports = {
    insertBooking: async (data) => {
        try {
            let response = await insertBookingQuery(data)
            return successValidator(
                response,
                'Insert successful.',
                'Insert failed.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    getBookingById: async (id) => {
        try {
            let response = await getBookingQueryById(id)
            return successValidator(
                response,
                'Get data successful.',
                'Failed to get data.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    getAllBooking: async (id) => {
        try {
            let response = await getAllBookingQuery(id)
            return successValidator(
                response,
                'Get all data successful.',
                'Failed to get all data.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    deleteBookingById: async (id) => {
        try {
            let response = await deleteBookingQueryById(id)
            return successValidator(
                response,
                'data delete successful.',
                'Failed to delete data.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    updateBookingById: async (id, data) => {
        try {
            let response = await updateBookingQueryById(id, data)
            return successValidator(
                response,
                'update successful.',
                'Update failed.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    updateStatusBookingById: async (id, data) => {
        try {
            if (!['pending', 'complete', 'cancel'].includes(data.status)) {
                return {
                    success: false,
                    payload: {
                        data: [],
                    },
                    msg: 'Invalid status keyed.',
                }
            }
            let response = await updateBookingQueryById(id, data)
            return successValidator(
                response,
                'update successful.',
                'Update failed.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    getBookingByUserId: async (id) => {
        try {
            let response = await getBookingByUserId(id)
            return successValidator(
                response,
                'Get data successful.',
                'Failed to get data.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    getBookingByActivityId: async (id) => {
        try {
            let response = await getBookingQueryByActivityId(id)
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
