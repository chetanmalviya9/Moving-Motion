const express = require('express');
const userRouter = require('./routes/userRoute');
const indexRouter = require('./routes/indexRoute');
const bodyParser = require('body-parser');
const multer = require('multer')

require("./model/conn");

// console.log(indexRouter)
const path = require('path');
const app = express();
app.set("view engine", "ejs");

// const { ppid } = require('process');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// // to set the path of static files
const staticFilePath = path.join(__dirname, "public");
app.use(express.static(staticFilePath));
const uploadPath = path.join(__dirname, "Uploadimages");
app.use(express.static(uploadPath));

app.use("/user", userRouter);

//http://localhost:3000/
app.use(indexRouter);
app.listen(3000);