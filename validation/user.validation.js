const Joi = require("joi");

const createUser = {
    body: Joi.object().keys(
        {
            first_name: Joi.string().required().trim(),
            last_name: Joi.string().required().trim(),
            email: Joi.string().required().trim(),
            username: Joi.string().required().trim()
        }
    )
}

module.exports = {
    createUser
}