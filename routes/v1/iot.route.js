const express = require("express");
const { iotController } = require("../../controllers");
const { iotValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/create-record",
    validate(iotValidation.createIot),
    iotController.createIot
);

router.get(
    "/get-list",
    iotController.getListIot
)

router.get(
    "/get-details/:iotId",
    iotController.getIotDetails
)

router.put(
    "/update/:iotId",
    iotController.updateIot
)

router.delete(
    "/delete/:iotId",
    iotController.deleteRecord
)

module.exports = router