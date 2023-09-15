const express = require("express");
const { tokenController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { tokenValidation } = require("../../validation");

const router = express.Router();

router.post(
    "create-record",
    validate(tokenValidation.generateToken),
    tokenController.generateToken
);

router.get(
    "verify-token",
    tokenController.verifyToken
)

module.exports = router