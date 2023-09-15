const Joi = require("joi");

const createIot = {
    body: Joi.object().keys({
        device_name: Joi.string().required().trim(),
        device_type: Joi.string().required().trim(),
        device_status: Joi.string().required().trim(),
        device_configuration: Joi.string().required().trim(),
        device_connectivity: Joi.string().required().trim(),
        device_owner: Joi.string().required().trim(),
        device_data: Joi.string().required().trim()
    })
}

module.exports = {
    createIot
}