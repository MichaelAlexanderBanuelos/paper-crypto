const express = require("express");
const controller = require("./controller.js");
const router = express.Router();

router.route("/user").get(controller.getUser);

module.exports = router;
