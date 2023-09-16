const express = require("express");
const { categoryValidation } = require("../../validation");
const validate = require("../../middlewares/validate");
const { categoryController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-record",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

router.get(
    "/get-list",
    categoryController.getCategoryList
);

router.get(
    "/get-details",
    categoryController.categoryDetails
);

router.put(
    "/update",
    categoryController.updateCategory
)

module.exports = router