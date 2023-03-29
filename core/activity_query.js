const connect = require('./connect')


const activitySchema = require('../schemas/activity_schema')


module.exports = {
    insertActivityQuery: async (data) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                const activity = new activitySchema({
                    district: data.district,
                    activity_type: data.activity_type,
                    is_use_to_activity: data.is_use_to_activity,
                    activity_name: data.activity_name,
                    activity_detail: data.activity_detail,
                    activity_time: data.activity_time,
                    address: data.address,
                    latitude: data.latitude,
                    longtitude: data.longtitude,
                    participation_limit: data.participation_limit,
                    activity_price: data.activity_price,
                    status: data.status,
                    user_id: data.user_id,
                })
                // Store activity image files as base64-encoded strings
                const activityImages = []
                for (let i = 0; i < data.activity_image.length; i++) {
                    const imageBuffer = fs.readFileSync(data.activity_image[i].path)
                    const base64Image = imageBuffer.toString('base64')
                    activityImages.push({
                        data: base64Image,
                        contentType: data.activity_image[i].mimetype,
                    })
                }
                activity.activity_image = activityImages
                const dataResult = await activity.save()
                response.payload.data = dataResult
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })
    },
    getActivityQueryById: async (id) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await activitySchema.findOne(
                    { _id: id },
                    '-__v',
                )
                response.payload.data = [dataResult]
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })
    },
    getAllActivityQuery: async () => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await activitySchema.find(
                    {},
                    '-__v',
                )
                response.payload.data = dataResult
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })
    },
    deleteActivityQueryById: async (id) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await activitySchema.deleteOne({ _id: id })
                response.payload.data = dataResult
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })
    },
    updateActivityQueryById: async (id, data) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await activitySchema.findOneAndUpdate({ _id: id }, data)
                let findResult = await activitySchema.findOne(
                    { _id: id },
                    '-__v',
                )
                response.payload.old_data = dataResult
                response.payload.new_data = findResult
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })
    },
    getActivityByUserId: async (id) => {
        return connect().then(async (mongoose) => {
            let response = {
                success: false,
                payload: {},
            }
            try {
                let dataResult = await activitySchema.find(
                    { user_id: id },
                    '-__v',
                )
                response.payload.data = dataResult
                response.success = true
            } catch (err) {
                response.success = false
            } finally {
                mongoose.connection.close()
                return response
            }
        })

    }
}
