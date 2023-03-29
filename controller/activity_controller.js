const {
    insertActivity,
    getActivityById,
    getAllActivity,
    deleteActivityById,
    updateActivityById,
    updateStatusActivityById,
    getActivityByUserId
} = require('../model/activity_model')
const AWS = require('aws-sdk')
const S3_BUCKET_NAME = 'imtrip'
const s3 = new AWS.S3({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_ACCESS_SECRET
})

module.exports = {
    insertActivityController: async (req, res) => {
        try {
            const { district, activity_type, is_use_to_activity, activity_name, activity_detail, activity_time, address, latitude, longtitude, facility_food, facility_travel, facility_other, participation_limit, activity_price, status, user_id } = req.body
            const activity_image = req.files?.activity_image || []
            const urls = []

            // Upload activity images to S3
            for (let i = 0; i < activity_image.length; i++) {
                const file = activity_image[i]
                const params = {
                    Bucket: S3_BUCKET_NAME,
                    Key: `${Date.now()}_${file.name}`,
                    Body: file.data
                }
                const result = await s3.upload(params).promise()
                urls.push(result.Location)
            }

            const newActivity = new activitySchema({
                district,
                activity_type,
                is_use_to_activity,
                activity_name,
                activity_detail,
                activity_time,
                address,
                latitude,
                longtitude,
                facility_food,
                facility_travel,
                facility_other,
                activity_image: urls,
                participation_limit,
                activity_price,
                status,
                user_id
            })
            const dataResult = await newActivity.save()
            res.json({
                success: true,
                payload: {
                    data: dataResult,
                },
                msg: 'Insert successful.'
            })
        } catch (err) {
            console.error(err)
            res.json({
                success: false,
                payload: {
                    data: {},
                },
                msg: 'Insert failed.'
            })
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
