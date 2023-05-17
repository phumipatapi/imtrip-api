const mongoose = require('mongoose')
const { getMongooseType } = require('../functions/functions')


const bookingSchema = mongoose.Schema({
    booking_user_id: getMongooseType('String', true),
    booking_date: getMongooseType('String', true),
    booking_time: getMongooseType('String', true),
    booking_amount: getMongooseType('Number', true),
    booking_total_price: getMongooseType('Number', true),
    booking_status: getMongooseType('String', true),
    activity_id : getMongooseType('String', true),
},
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated_at',
        },
    })


module.exports = mongoose.model('bookings', bookingSchema)
