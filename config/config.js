const dotenv = require("dotenv");
const Joi = require("joi");

dotenv.config();

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(2000),
    MONGODB_URL: Joi.string().trim().description("Mongodb url"),
    JWT_SECRET_KEY: Joi.string().trim().description("Jwt secret key")
}).unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: "key" } }).validate(process.env);

if (error) { console.log("Config error !", error) }

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    jwt: {
        secret_key: envVars.JWT_SECRET_KEY
    }
}