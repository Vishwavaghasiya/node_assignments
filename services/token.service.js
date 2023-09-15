const { Token } = require("../models")

const generateToken = async (reqBody) => {
    return Token.create(reqBody);
}

const saveToken = async (reqBody) => {
    return await Token.findOneAndUpdate(
        { user: reqBody.user },
        { $set: { ...reqBody } },
        { new: true, upsert: true }
    );
}

module.exports = {
    generateToken,
    saveToken
}