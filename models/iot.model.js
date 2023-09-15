const mongoose = require("mongoose");

/**IOT : INTERNET OF THINGS INTEGRETION  */
const iotSchema = new mongoose.Schema(
    {
        device_name: {
            type: String,
            trim: true
        },
        device_type: {
            type: String,
            trim: true
        },
        device_status: {
            type: String,
            trim: true
        },
        device_configuration: {
            type: String,
            trim: true
        },
        device_connectivity: {
            type: String,
            trim: true
        },
        device_owner: {
            type: String,
            trim: true
        },
        device_data: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Iot = mongoose.model("iot", iotSchema);
module.exports = Iot