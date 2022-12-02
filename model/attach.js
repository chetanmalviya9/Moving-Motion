const mongoose = require("mongoose"); 
const AttachSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    driverName: {
        type: String,
        required: true,

    },
    adharNumber: {
        type: String,
        required: true,

    },
    vehicleNumber: {
        type: String,
        required: true

    },
    vehicleType: {
        type: String,
        required: true,

    },
    licence: {
        type: String,
        required: true,

    },
    insurance: {
        type: String,
        required: true,

    },
    RC: {
        type: String,
        required: true,

    },
    PUC: {
        type: String,
        required: true,

    },
    fitness: {
        type: String,
        required: true,

    },
    driverPhoto: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    }
}
)
// create second collection for delivery details
const Attachdetail = new mongoose.model("AttachVehicle", AttachSchema)
module.exports = Attachdetail;
