const mongoose = require("mongoose");
const deliverySchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    pickuplocation: {
        type: String,
        required: true
    },
    pickUpcontact: {
        type: Number,
        required: true,
        
    },
    deliverylocation: {
        type: String,
        required: true,
    
    },
    destinationcontact: {
        type: Number,
        required: true

    },
    pickupdate: {
        type: Date,
        required: true,
    
    },
    mobile:{
        type: String,
        required: true,
    }
}
)
// create second collection for delivery details
const Deliverydetail = new mongoose.model("OrderDetail", deliverySchema)
module.exports = Deliverydetail;