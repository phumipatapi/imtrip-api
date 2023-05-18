const express = require('express')
const router = express.Router()
const { body, param } = require('express-validator')
const apiValidation = require('../validation/apiValidation')


const {
    insertBookingController,
    getBookingByIdController,
    getAllBookingController,
    deleteBookingByIdController,
    updateBookingByIdController,
    updateStatusBookingByIdController,
    getBookingByUserIdController,
    getBookingByActivityIdController,
    getBookingByCreatedUserController
} = require('../controller/booking_controller')


router.post('/insert', [
    body('booking_user_id').notEmpty(),
    body('booking_datetime').notEmpty(),
    body('booking_amount').notEmpty(),
    body('booking_total_price').notEmpty(),
    body('booking_status').notEmpty(),
    body('activity_id').notEmpty(),
    body('activity_name').notEmpty(),
    body('activity_district').notEmpty(),
    body('booking_user_name').notEmpty(),
    body('booking_user_phone').notEmpty(),
    // body('booking_user_image').notEmpty(),
], apiValidation, insertBookingController,
)


router.get('/get_by_id/:id', [
    param('id').notEmpty(),
], apiValidation, getBookingByIdController,
)



router.get('/get/all', getAllBookingController)


router.post('/delete/:id', [
    param('id').notEmpty(),
], apiValidation, deleteBookingByIdController,
)

router.post('/update/:id', [
    param('id').notEmpty(),
], apiValidation, updateBookingByIdController,
)

router.post('/update_status/:id', [
    param('id').notEmpty(),
    body('booking_status').notEmpty(),
], apiValidation, updateStatusBookingByIdController,
)

router.get('/get_by_user_id/:id', [
    param('id').notEmpty(),
], apiValidation, getBookingByUserIdController,
)

router.get('/get_by_activity_id/:id', [
    param('id').notEmpty(),
], apiValidation, getBookingByActivityIdController,
)

router.get('/get_by_created_id/:id', [
    param('id').notEmpty(),
], apiValidation, getBookingByCreatedUserController,
)

module.exports = router
