const { iotService } = require("../services");

/**create record */
const createIot = async (req, res) => {
    try {
        const reqBody = req.body;

        const iot = await iotService.createIot(reqBody);
        if (!iot) {
            throw new Error("Something wents wrong , please try again or later !")
        }

        res.status(200).json({
            success: true,
            message: "Iot created successfully !",
            data: iot
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**get list */
const getListIot = async (req, res) => {
    try {
        const getList = await iotService.getListIot(req, res);

        if (!getList) {
            throw new Error("IOT not found !");
        }

        res.status(200).json({ success: true, data: getList });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error.message || "Something wents wrong , try again or later !"
        });
    }
}

/**get list by id */
const getIotDetails = async (req, res) => {
    try {
        const iotId = req.params.iotId;

        const getIotDetails = await iotService.getIotById(iotId);
        if (!getIotDetails) {
            throw new Error("Iot not found !");
        }

        res.status(200).json({
            success: true,
            message: "Iot details get successfully !",
            data: getIotDetails
        })
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message: error.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**update record */
const updateIot = async (req, res) => {
    try {
        const iotId = req.params.iotId;

        const iotExist = await iotService.getIotById(iotId);
        if (!iotExist) {
            throw new Error("Iot not found !");
        }

        await iotService.updateIot(iotId, req.body);

        res.status(200).json({
            success: true,
            message: "Iot record is update successfully !",
            data: iotExist
        });
    } catch (error) {
        res.status(error?.message || "Something wents wrong please try again or later !");
    }
}

/**delete record */
const deleteRecord = async (req, res) => {
    try {
        const iotEx = await iotService.getListIot(req.params.iotId);
        if (!iotEx) {
            throw new Error("Something wents wrong , please try again or later !")
        }

        await iotService.deleteRecord(req.params.iotId);

        res.status(200).json({ success: true, message: "Record delete successfully !", data: iotEx });
    } catch (error) {
        res.status(400).json({ success: false, error: error?.message || "Something wents wrong , please try again or later" });
    }
}

module.exports = {
    createIot,
    getListIot,
    getIotDetails,
    updateIot,
    deleteRecord
}