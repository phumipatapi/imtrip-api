const mongoose = require('mongoose')
const { getMongooseType } = require('../functions/functions')


const insightSchema = mongoose.Schema({
    activity_id : getMongooseType('String', true),
    activity_name : getMongooseType('String', true),
    engagement : getMongooseType('String', true),


  
},
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated_at',
        },
    })


module.exports = mongoose.model('insight', insightSchema)
