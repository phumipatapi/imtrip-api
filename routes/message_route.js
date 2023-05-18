const express = require("express");
const router = express.Router();
const { param } = require("express-validator");
const apiValidation = require("../validation/apiValidation");

const { getAllChatWithRoomID } = require("../controller/message_controller");

router.get(
  "/room/:id",
  [param("id").notEmpty()],
  apiValidation,
  getAllChatWithRoomID
);

module.exports = router;
