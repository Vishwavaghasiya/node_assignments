const { Category } = require("../models")

const createCategory = async (reqBody) => {
    return Category.create(reqBody);
}

const getCategoryList = async (req, res) => {
    return Category.find();
}

const getCategoryById = async (categotyId) => {
    return Category.findById(categotyId);
}

const updateCategory = async (categoryId, updateBody) => {
    return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
}

const deleteRecord = async (categoryId) => {
    return Category.findByIdAndDelete(categoryId);
}

module.exports = {
    createCategory,
    getCategoryById,
    getCategoryList,
    updateCategory,
    deleteRecord
}