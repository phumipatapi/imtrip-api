const {
    insertInsightQuery,
    getInsightQueryById,
    getAllInsightQuery,
    updateInsightQueryById,
    getInsightQueryByActivityId,
   

} = require('../core/insight_query')
const { successValidator } = require('../functions/functions')

module.exports = {
    insertInsight: async (data) => {
        try {
            let response = await insertInsightQuery(data)
            return successValidator(
                response,
                'Insert successful.',
                'Insert failed.',
            )
        } catch (err) {
            console.log(err)
        }
    },
   
    getInsightById: async (id) => {
        try {
            let response = await getInsightQueryById(id)
            return successValidator(
                response,
                'Get data successful.',
                'Failed to get data.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    getAllInsight: async (id) => {
        try {
            let response = await getAllInsightQuery(id)
            return successValidator(
                response,
                'Get all data successful.',
                'Failed to get all data.',
            )
        } catch (err) {
            console.log(err)
        }
    },
    
    updateInsightById: async (id, data) => {
        try {
            let response = await updateInsightQueryById(id, data)
            return successValidator(
                response,
                'update successful.',
                'Update failed.',
            )
        } catch (err) {
            console.log(err)
        }
    },
   
    getInsightByActivityId: async (id) => {
        try {
            let response = await getInsightQueryByActivityId(id)
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
