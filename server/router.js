const express = require("express");
const controller = require("./controller.js");

const router = express.Router();

router.route("/user/:id").get(controller.getUser);
router.route("/cryptos").get(controller.getCryptos);

module.exports = router;
