const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/motion", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
}).then(() => {
    console.log("connection is success");
}).catch((err) => {
    console.log("no connection");
});
