const {
    insertActivity,
    getActivityById,
    getAllActivity,
    deleteActivityById,
    updateActivityById,
    updateStatusActivityById,
} = require('../model/activity_model')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')



module.exports = {
    insertActivityController: async (req, res, next) => {
        try {
            const {
                district,
                activity_type,
                is_use_to_activity,
                activity_name,
                activity_detail,
                activity_time,
                address,
                latitude,
                longtitude,
                participation_limit,
                activity_price,
                status,
                user_id,
            } = req.body

            const activity_images = []

            // Loop through each image and save it to a local directory
            for (let i = 0; i < req.body.activity_image.length; i++) {
                const file = req.body.activity_image[i]
                const extension = file.split(';')[0].split('/')[1]
                const fileName = `${uuidv4()}.${extension}`
                const imagePath = `${__dirname}/../public/images/${fileName}`
                const base64Data = file.replace(/^data:image\/\w+;base64,/, '')
                fs.writeFileSync(imagePath, base64Data, { encoding: 'base64' })
                activity_images.push(`http://${req.headers.host}/images/${fileName}`) // Save the URL to the image in the activity_images array
            }

            const activityData = {
                district,
                activity_type,
                is_use_to_activity,
                activity_name,
                activity_detail,
                activity_time,
                address,
                latitude,
                longtitude,
                activity_images, // Save the array of image URLs in the activity_images field
                participation_limit,
                activity_price,
                status,
                user_id,
            }

            const response = await insertActivityQuery(activityData)
            res.status(200).json(response)
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
