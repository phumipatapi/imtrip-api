const express = require('express')
const router = express.Router()
const { body, param } = require('express-validator')
const apiValidation = require('../validation/apiValidation')


const {
    insertActivityController,
    getActivityByIdController,
    getAllActivityController,
    deleteActivityController,
    updateActivityByIdController,
    updateStatusActivityByIdController,
    getActivityByUserIdController,
    searchActivityController
} = require('../controller/activity_controller')


router.post('/insert', [
    body('district').notEmpty(),
    body('activity_type').notEmpty(),
    body('is_use_to_activity').notEmpty(),
    body('activity_name').notEmpty(),
    body('activity_detail').notEmpty(),
    body('activity_time').notEmpty(),
    body('address').notEmpty(),
    body('latitude').notEmpty(),
    body('longtitude').notEmpty(),
    body('activity_image').notEmpty(),
    body('participation_limit').notEmpty(),
    body('activity_price').notEmpty(),
    body('status').notEmpty(),
    body('user_id').notEmpty(),
], apiValidation, insertActivityController,
)


router.get('/get_by_id/:id', [
    param('id').notEmpty(),
], apiValidation, getActivityByIdController,
)

router.get('/search/:search', [
    param('search').notEmpty(),
], apiValidation, searchActivityController,
)


router.get('/get/all', getAllActivityController)


router.post('/delete/:id', [
    param('id').notEmpty(),
], apiValidation, deleteActivityController,
)

router.post('/update/:id', [
    param('id').notEmpty(),
], apiValidation, updateActivityByIdController,
)

router.post('/update_status/:id', [
    param('id').notEmpty(),
    body('status').notEmpty(),
], apiValidation, updateStatusActivityByIdController,
)

router.get('/get_by_user_id/:id', [
    param('id').notEmpty(),
], apiValidation, getActivityByUserIdController,
)


module.exports = router
