const jwt = require("jsonwebtoken");
const { User } = require("../models");
const config = require("../config/config");

const auth = () => async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return next((401).json({
                status: 401,
                message: "Please authenticate !"
            }));
        }

        const decode = jwt.verify(
            token.replace("Bearer", ""),
            config.jwt.secret_key
        );

        if (!decode) {
            return next(new Error("Please enter valida token !"));
        }

        const user = await User.findOne({ _id: decode.user });
        if (!user) {
            throw new Error("Please authenticate !");
        }

        req.user = user;
        next();
    } catch (error) {
        return next(new Error(error));
    }
};

module.exports = auth;