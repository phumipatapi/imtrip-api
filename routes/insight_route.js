const express = require('express')
const router = express.Router()
const { body, param } = require('express-validator')
const apiValidation = require('../validation/apiValidation')


const {
   insertInsightController,
    getInsightByIdController,
    getAllInsightController,
    updateInsightByIdController,
    getInsightByActivityIdController,

} = require('../controller/insight_controller')


router.post('/insert', [
    body('activity_id').notEmpty(),
    body('activity_name').notEmpty(),
    body('engagement').notEmpty(),
   
], apiValidation, insertInsightController,
)


router.get('/get_by_id/:id', [
    param('id').notEmpty(),
], apiValidation, getInsightByIdController,
)



router.get('/get/all', getAllInsightController)

router.post('/update/:id', [
    param('id').notEmpty(),
], apiValidation, updateInsightByIdController,
)


router.get('/get_by_activity_id/:id', [
    param('id').notEmpty(),
], apiValidation, getInsightByActivityIdController,
)


module.exports = router
