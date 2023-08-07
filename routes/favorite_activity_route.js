const express = require('express')
const router = express.Router()
const { body, param } = require('express-validator')
const apiValidation = require('../validation/apiValidation')


const {
    insertFavoriteController,
    getAllFavoriteController,
    deleteFavoriteByIdController,
    getFavoriteByUserIdController,
   
} = require('../controller/favorite_activity_controller')


router.post('/insert', [
    body('activity_id').notEmpty(),
    body('activity_name').notEmpty(),
    body('activity_district').notEmpty(),
    body('activity_price').notEmpty(),
    body('activity_rating').notEmpty(),
    body('activity_image').notEmpty(),
    body('user_id').notEmpty(),
], apiValidation, insertFavoriteController,
)



router.get('/get/all', getAllFavoriteController)


router.post('/delete/:id', [
    param('id').notEmpty(),
], apiValidation, deleteFavoriteByIdController,
)


router.get('/get_by_user_id/:id', [
    param('id').notEmpty(),
], apiValidation, getFavoriteByUserIdController,
)


module.exports = router
