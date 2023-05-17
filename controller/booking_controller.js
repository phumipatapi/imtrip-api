const {
    insertBooking,
    getBookingById,
    getAllBooking,
    deleteBookingById,
    updateBookingById,
    updateStatusBookingById,
    getBookingByUserId,
    getBookingByActivityId
} = require('../model/booking_model')

module.exports = {
    insertBookingController: async (req, res, next) => {
        try {
            const jsonResponse = await insertBooking(req.body)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    getBookingByIdController: async (req, res, next) => {
        try {
            const jsonResponse = await getBookingById(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    getAllBookingController: async (req, res, next) => {
        try {
            const jsonResponse = await getAllBooking()
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    deleteBookingByIdController: async (req, res, next) => {
        try {
            const jsonResponse = await deleteBookingById(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    updateBookingByIdController: async (req, res, next) => {
        try {
            const jsonResponse = await updateBookingById(req.params.id, req.body)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    updateStatusBookingByIdController: async (req, res, next) => {
        try {
            const jsonResponse = await updateStatusBookingById(req.params.id, req.body)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    getBookingByUserIdController: async (req, res, next) => {
        try {
            const jsonResponse = await getBookingByUserId(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    getBookingByActivityIdController: async (req, res, next) => {
        try {
            const jsonResponse = await getBookingByActivityId(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    }

}
