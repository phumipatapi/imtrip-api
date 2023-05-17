const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))


const routeActivity = require('./routes/activity_route')

const routeBooking = require('./routes/booking_route')

const routeFavoriteActivity = require('./routes/favorite_activity_route')

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'THIS IS AN API',
    })
})


app.use('/activity', routeActivity)

app.use('/activity/search/:keyword', async (req, res, next) => {
    try {
      let data = await mongoose.model('activities').find({
        $or: [
          { activity_name: { $regex: req.params.keyword } },
          { district: { $regex: req.params.keyword } }
        ]
      });
  
      res.json(data); // Send the response with the retrieved data
    } catch (error) {
      next(error); // Pass the error to the Express error handler
    }
  });

app.use('/booking', routeBooking)

app.use('/favorite_activity', routeFavoriteActivity)


app.use((req, res, next) => {
    const err = new Error('Not Found.')
    err.status = 404
    next(err)
})


app.use((err, req, res, next) => {
    res.status(err.status || 501)
    res.json({
        error: {
            code: err.status || 501,
            message: err.message,
        }
    })
})


app.listen(PORT, () => {
    console.log('Running on PORT:' + PORT)
})
