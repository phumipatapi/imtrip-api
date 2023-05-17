const mongoose = require('mongoose')
const { getMongooseType } = require('../functions/functions')


const bookingSchema = mongoose.Schema({
    booking_user_id: getMongooseType('String', true),
    booking_datetime: getMongooseType('String', true),
    booking_amount: getMongooseType('Number', true),
    booking_total_price: getMongooseType('Number', true),
    booking_status: getMongooseType('String', true),
    activity_id : getMongooseType('String', true),
    activity_name : getMongooseType('String', true),
    activity_district : getMongooseType('String', true),
    booking_user_name : getMongooseType('String', true),
    booking_user_phone : getMongooseType('String', true),
    booking_user_image : getMongooseType('String', true),
},
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated_at',
        },
    })


module.exports = mongoose.model('bookings', bookingSchema)
