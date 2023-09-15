const { categoryService } = require("../services");

/**create category */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const category = await categoryService.createCategory(reqBody);
        if (!category) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success: true,
            message: "Category create successfully !",
            data: category
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get list */
const getCategoryList = async (req, res) => {
    try {
        const getList = await categoryService.getCategoryList(req, res);
        if (!getList) {
            throw new Error("Category not found !");
        }

        res.status(200).json({
            success: true,
            message: "Category list get successfully !",
            data: getList
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get details by id */
const categoryDetails = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryEx = await categoryService.getCategoryById(categoryId);
        if (!categoryEx) {
            throw new Error("Category not found !");
        }

        res.status(200).json({
            success: true,
            message: "Category details get successfullY !",
            data: categoryEx
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

module.exports = {
    createCategory,
    getCategoryList,
    categoryDetails
}