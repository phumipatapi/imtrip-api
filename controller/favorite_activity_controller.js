const {
    insertFavorite,
    getAllFavorite,
    deleteFavoriteById,
    getFavoriteByUserId
} = require('../model/favorite_activity_model')

module.exports = {
    insertFavoriteController: async (req, res, next) => {
        try {
            const jsonResponse = await insertFavorite(req.body)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    getAllFavoriteController: async (req, res, next) => {
        try {
            const jsonResponse = await getAllFavorite()
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    deleteFavoriteByIdController: async (req, res, next) => {
        try {
            const jsonResponse = await deleteFavoriteById(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    
    getFavoriteByUserIdController: async (req, res, next) => {
        try {
            const jsonResponse = await getFavoriteByUserId(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    }

}
