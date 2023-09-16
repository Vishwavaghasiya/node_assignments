const express = require("express");

const iotRoute = require("./iot.route");
const tokenRoute = require("./token.route");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");

const router = express.Router();

router.use("/iot", iotRoute);
router.use("/token", tokenRoute);
router.use("/user", userRoute);
router.use("/category", categoryRoute);

module.exports = router