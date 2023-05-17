const {
    insertActivity,
    getActivityById,
    getAllActivity,
    deleteActivityById,
    updateActivityById,
    updateStatusActivityById,
    getActivityByUserId,
    searchActivity
} = require('../model/activity_model')

module.exports = {
    insertActivityController: async (req, res, next) => {
        try {
            const jsonResponse = await insertActivity(req.body)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    searchActivityController: async (req, res, next) => {
        try {
            const jsonResponse = await searchActivity(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    getActivityByIdController: async (req, res, next) => {
        try {
            const jsonResponse = await getActivityById(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    getAllActivityController: async (req, res, next) => {
        try {
            const jsonResponse = await getAllActivity()
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    deleteActivityController: async (req, res, next) => {
        try {
            const jsonResponse = await deleteActivityById(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    updateActivityByIdController: async (req, res, next) => {
        try {
            const jsonResponse = await updateActivityById(req.params.id, req.body)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    updateStatusActivityByIdController: async (req, res, next) => {
        try {
            const jsonResponse = await updateStatusActivityById(req.params.id, req.body)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    getActivityByUserIdController: async (req, res, next) => {
        try {
            const jsonResponse = await getActivityByUserId(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    }

}
