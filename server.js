const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const firebaseAdmin = require("./core/firebase_config");
firebaseAdmin.initializeApps();

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routeActivity = require("./routes/activity_route");

const routeBooking = require("./routes/booking_route");

const routeFavoriteActivity = require("./routes/favorite_activity_route");

const routeUpload = require("./routes/upload_route");

app.get("/", (req, res) => {
  res.status(200).json({
    message: "THIS IS AN API",
  });
});

app.use("/activity", routeActivity);

app.use("/booking", routeBooking);

app.use("/favorite_activity", routeFavoriteActivity);

app.use("/upload", routeUpload);

app.use((req, res, next) => {
  const err = new Error("Not Found.");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 501);
  res.json({
    error: {
      code: err.status || 501,
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log("Running on PORT:" + PORT);
});
