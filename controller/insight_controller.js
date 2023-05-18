const {
    insertInsight,
    getInsightById,
    getAllInsight,
    updateInsightById,
    getInsightByActivityId,
    
} = require('../model/insight_model')

module.exports = {
    insertInsightController: async (req, res, next) => {
        try {
            const jsonResponse = await insertInsight(req.body)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
   
    getInsightByIdController: async (req, res, next) => {
        try {
            const jsonResponse = await getInsightById(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
    getAllInsightController: async (req, res, next) => {
        try {
            const jsonResponse = await getAllInsight()
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
   
    updateInsightByIdController: async (req, res, next) => {
        try {
            const jsonResponse = await updateInsightById(req.params.id, req.body)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    },
  
    getInsightByActivityIdController: async (req, res, next) => {
        try {
            const jsonResponse = await getInsightByActivityId(req.params.id)
            res.status(200)
            res.json(jsonResponse)
        } catch (err) {
            next(err)
        }
    }

}
