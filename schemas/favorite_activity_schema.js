const mongoose = require('mongoose')
const { getMongooseType } = require('../functions/functions')


const favoriteSchema = mongoose.Schema({
    activity_id : getMongooseType('String', true),
    activity_name : getMongooseType('String', true),
    activity_district : getMongooseType('String', true),
    activity_price : getMongooseType('Number', true),
    activity_rating : getMongooseType('Number', true),
    user_id : getMongooseType('String', true),
},
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated_at',
        },
    })


module.exports = mongoose.model('favoriteActivities', favoriteSchema)
