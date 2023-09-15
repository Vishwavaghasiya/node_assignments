const express = require("express");
const { userValidation } = require("../../validation");
const validate = require("../../middlewares/validate");
const { userController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-record",
    validate(userValidation.createUser),
    userController.createUser
);

router.get(
    "/get-list",
    userController.getUserList
);

router.get(
    "/get-details",
    userController.getUserDetails
);

router.put(
    "/update-record",
    userController.updateUser
);

router.delete(
    "/delete-record",
    userController.deleteUser
)

module.exports = router