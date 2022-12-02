const mongoose = require("mongoose");
const AcceptOrderSchema = new mongoose.Schema({
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
const AcceptedOrder = new mongoose.model("AcceptedOrder", AcceptOrderSchema)
module.exports = AcceptedOrder;