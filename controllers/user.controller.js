const { userService } = require("../services");

/**create user */
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const user = await userService.createUser(reqBody);
        if (!user) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success: true,
            message: "User create successfully !",
            data: user
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**get list */
const getUserList = async (req, res) => {
    try {
        const getList = await userService.getUserList(req, res);
        if (!getList) {
            throw new Error("User not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get user list successfully !",
            data: getList
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message: error?.message || "User not found !"
        })
    }
}

/**get list by id */
const getUserDetails = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExist = await userService.getUserById(userId);
        if (!userExist) {
            throw new Error("User not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get user details successfully!",
            data: userExist
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message: error.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**update user */
const updateUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const userEx = await userService.getUserById(req.params.userId);
        if (!userEx) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        await userService.updateUser(userId, updateBody);

        res.status(200).json({
            success: true,
            message: "User updated !",
            data: userEx
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "User not found !"
        });
    }
}

/**delete record */
const deleteUser = async (req, res) => {
    try {
        const userEx = await userService.getUserList(req.params.userId);
        if (!userEx) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        await userService.deleteUser(req.params.userId);

        res.status(200).json({
            success: true,
            message: "Your record deleted successfully !"
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createUser,
    getUserList,
    getUserDetails,
    updateUser,
    deleteUser
}