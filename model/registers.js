const mongoose = require("mongoose");
//create schema for database
const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    Password: {
        type: String,
        required: true
    },
    CPassword: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
    }
})
// create a collection
const Userregister = new mongoose.model("Userregister", userSchema)
module.exports = Userregister;