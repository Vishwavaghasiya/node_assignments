const { Iot } = require("../models");

const createIot = async (reqBody) => {
    return Iot.create(reqBody);
}

const getListIot = async (req, res) => {
    return Iot.find();
}

const getIotById = async (iotId) => {
    return Iot.findById(iotId);
}

const updateIot = async (iotId, updateBody) => {
    return Iot.findByIdAndUpdate(iotId, { $set: updateBody })
}

const deleteRecord = async (iotId) => {
    return Iot.findByIdAndDelete(iotId)
}

module.exports = {
    createIot,
    getListIot,
    getIotById,
    updateIot,
    deleteRecord
}