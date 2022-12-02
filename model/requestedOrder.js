const mongoose = require("mongoose");
const RequestedSchema = new mongoose.Schema({
    drivername: {
        type: String,
        required: true
    },
    driverNum:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    vehicleNumber:{
        type: String,
        required: true
    },
    vehicleType:{
        type: String,
        required: true
    },
    userMob:{
        type: String,
        required: true
    }
})
// create second collection for delivery details
const RequestedOrder = new mongoose.model("RequestedOrder", RequestedSchema)
module.exports = RequestedOrder;