const express = require('express');
const router = express.Router();
const multer = require('multer')
const Deliverydetail = require('../model/deliveries')
const Attachdetail = require('../model/attach')
const Userregister = require('../model/registers')
const RequestedOrder = require('../model/requestedOrder')
const AcceptedOrder = require('../model/AcceptedOrder')
const indexRouter = require('../controller/indexController');
const { default: mongoose } = require('mongoose');
const client = require('twilio')('AC36041df1df159f3a3fdf2fe17508f9ad', '53d002ec487c795057d60475d43bf19d')



router.get("/", indexRouter.homePage);

router.post("/", async (req, res) => {
    try {
        const userdetail = await Userregister.findOne({ mobile: Mobile })
        const pickupaddress = req.body.pickuplocation;
        const destinationaddress = req.body.deliverylocation;

        if (pickupaddress !== destinationaddress) {
            const deliverypick = new Deliverydetail({
                user: userdetail.user,
                pickuplocation: pickupaddress,
                pickUpcontact: req.body.pickUpcontact,
                deliverylocation: destinationaddress,
                destinationcontact: req.body.destinationcontact,
                pickupdate: req.body.pickupdate,
                mobile: Mobile
            })
            const registeddelivery = await deliverypick.save();
            // let msg = "Your order has palced please wait sometime for Driver Response";

            // sendMsg(msg,Mobile)

            res.status(201).render("user-module/bookingStatus");
        }
        else {
            console.log("Invalid details about delivery address");
        }
    }
    catch (error) {
        
        res.status(400).send("<h1>Something Went Wrong..........</h1>");
    }
});

router.get("/about", indexRouter.aboutPage);

router.get("/contact", indexRouter.contactPage);

router.get("/Quotaion", indexRouter.QuotationPage);

router.get("/services", indexRouter.ServicePage);

router.get("/vehicleAttach1", indexRouter.VehicleAttach);
router.post("/vehicleAttach1", (req, res) => {
    console.log(Mobile)
    ownername = req.body.ownerName
    drivername = req.body.driverName;
    aadharnumber = req.body.adharNumber;
    vehiclenumber = req.body.vehicleNumber;
    vehicletype = req.body.vehicleType;
    res.status(201).render("user-module/vehicleAttach2", { Mobile });
});

var str = ''

//-----------multer------------------
var storage = multer.diskStorage(
    {
        destination: function (request, response, callback) {
            
            callback(null, './UploadImages');
        },
        filename: function (req, res, cb) {
            Image = Date.now() + "-" + res.originalname
            cb(null, Image);
            str += " " + Image;
        }
    }
    );
    var upload = multer({ storage: storage });
    
    router.get("/vehicleAttach2", indexRouter.VehicleAttach2);
    router.post("/vehicleAttach2", upload.array('Image', 6), async (req, res) => {
        try {
            
            str = str.trim();
            let arr = str.split(" ")
            str = '';
            
            const Attachvehicles = new Attachdetail({
            ownerName: ownername,
            driverName: drivername,
            adharNumber: aadharnumber,
            vehicleNumber: vehiclenumber,
            vehicleType: vehicletype,
            licence: arr[0],
            insurance: arr[1],
            RC: arr[2],
            PUC: arr[3],
            fitness: arr[4],
            driverPhoto: arr[5],
            mobile: Mobile
        })
        const registeddelivery = await Attachvehicles.save();
        // console.log("check working or not");
        // let msg = "You have attached vehicle Successfully- Lets move together"
        // sendMsg(msg,Mobile);
        res.status(201).render("user-module/attachStatus");
    }
    catch (error) {
        res.status(400).send("<h1>Something Went Wrong..........</h1>");
    }
});
router.get("/userList", (req, res) => {
    Mob = Mobile
    
    Userregister.find({ mobile: Mob })
    .then((x) => {

        res.render("user-module/userList", { x });
    }).catch((err) => {
        res.status(400).send("<h1>Something Went Wrong..........</h1>");
    })
})
router.get("/order", (req, res) => {
    
    Attachdetail.findOne({ mobile: Mobile })
    .then((data) => {
        if (data) {
            Deliverydetail.find({
                
            }).then((x) => {
                // console.log(x)
                
                        // console.log(.getUTCDate());
                        if (x.length != 0)
                            res.render("user-module/order", { x });
                        else
                        res.render("user-module/NoorderStatus")
                }).catch((err) => {
                    res.status(400).send("<h1>Something Went Wrong..........</h1>");
                })
            }
            else
            res.render("user-module/ordernot")
        }).catch((y) => {
            res.status(400).send("<h1>Something Went Wrong..........</h1>");
        })
    })
    router.post("/order", async (req, res) => {
        
        Driver = await Attachdetail.findOne({
            mobile: Mobile
        })
        console.log(Driver)
        try {
            const Requestedorder = new RequestedOrder({
                drivername: Driver.driverName,
                driverNum: Mobile,
                price: req.body.price,
                vehicleNumber: Driver.vehicleNumber,
                vehicleType: Driver.vehicleType,
                userMob: Mobe
            })
            const registeddelivery = await Requestedorder.save();
            
            res.status(201).render("user-module/index");
        }
        catch (error) {
            res.status(400).send("<h1>Something Went Wrong..........</h1>");
        }
    })
    //-------------------------
    router.get("/orderStatus", (req, res) => {
        
        RequestedOrder.find({ userMob: Mobile })
        .then((x) => {
            // console.log(x)
            if (x.length != 0)
            res.render("user-module/orderStatus", { x });
            else
            res.send("no order");
         
        }).catch((err) => {
            res.status(400).send("<h1>Something Went Wrong..........</h1>");
        })
    })

//----------User can see their Status of Order---------//
router.post("/orderStatus", async (req, res) => {
        
        Data = await RequestedOrder.findOne({
            userMob: Mobile,
            driverNum: Mobe
        })
        
        try {
            const Acceptorder = new AcceptedOrder({
                drivername: Data.drivername,
                driverNum: Data.driverNum,
                price: Data.price,
                vehicleNumber: Data.vehicleNumber,
                vehicleType: Data.vehicleType,
            userMob: Data.userMob
        })
        const registeddelivery = await Acceptorder.save();
        User_detail = await Deliverydetail.findOne({ mobile: Data.userMob })
        let msg = "customer name:- " + User_detail.user + ", Pick-up Location:- " + User_detail.pickuplocation + ", Pick-up Contact:- " + User_detail.pickUpcontact + ", delivery Location:- " + User_detail.deliverylocation + ", destination contact:- " + User_detail.destinationcontact + ", Pick-up Date:- " + User_detail.pickupdate
        
        sendMsg(msg, Mobe);
        msg="Driver name:- "+ Data.drivername+", VehicleNumber:- " +Data.vehicleNumber+", Driver Number:- "+Data.driverNum;
        sendMsg(msg, Data.userMob);
        res.status(201).render("user-module/index");
    }
    catch (error) {
        res.status(400).send("<h1>Something Went Wrong..........</h1>");
    }
})
//---------------Message
function sendMsg(msg, number) {
    client.messages.create({
        body: msg,
        to: '+918839597780',
        from: '+18148854187'
    }).then((message) => console.log(message)).catch((err) => console.log(err))
}

module.exports = router;