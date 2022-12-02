const express = require('express');
const router = express.Router();
const Userregister = require("../model/registers");
const otpGenerator = require('otp-generator')
var nodemailer = require('nodemailer');
const client = require('twilio')('', '')


router.get("/", (req, res) => {
    res.render("index");
});
router.get("/login", (req, res) => {
    res.render("login");
});
// signup page posting data in mongodb
router.get("/signup", (req, res) => {
    res.render("signup");
});
router.post("/signup", (req, res) => {

    bodyUser = req.body.user
    pass = req.body.Password;
    cpass = req.body.CPassword;
    bodyEmail = req.body.email;
    bodyMobile = req.body.mobile;
    generatedOtp = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
    console.log(generatedOtp);
    sendMsg(generatedOtp,bodyMobile);
    
    res.status(201).render("otp");
    
});
function sendMsg(msg, number) {
    client.messages.create({
        body: msg,
        to: '+91' + number,
        from: '+18148854187'
    }).then((message) => console.log(message)).catch((err) => console.log(err))
}
//-----------------------------------------
//------Node Mailer------------------------
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'chetanmalviya924@gmail.com',
//         pass: 'xrfmzlvlgqawnygw'
//     }
// });

// var mailOptions = {
//     from: 'chetanmalviya924@gmail.com',
//     to: '24chetanmalviya@gmail.com',
//     subject: 'Moving Motion',
//     text: generatedOtp
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
    //         console.log(error);
    //     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });
//-------------------------------------------------------
router.post("/otp", async (req, res) => {
    
    const otp = req.body.t1 + req.body.t2 + req.body.t3 + req.body.t4;
    console.log(otp)
    if (otp == generatedOtp) {
        try {
            console.log("hii")
            if (pass === cpass) {
                const regUser = new Userregister({
                    user: bodyUser,
                    email: bodyEmail,
                    Password: pass,
                    CPassword: cpass,
                    mobile: bodyMobile
                })
                console.log("aa gya data")
                const registed = await regUser.save();
                res.status(201).render("submit");
            }

            else {
                res.send("password not matched");
            }
        } catch (error) {
            res.status(400).send("<h1>Something Went Wrong..........</h1>");
        }
        
    }
    else {
        res.send("Otp NOT matched");
    }
})

//msg91


/////signup finished/////

///login 
router.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.Password;
        
        const useremail = await Userregister.findOne({ email: email });
        //  res.send(useremail);
        Mobile = useremail.mobile
        if (useremail.Password === pass) {
            // useremail=new usermail
            
            res.status(201).render("user-module/index",{Mobile});
        }
        else {
            res.send("<h1>Details not matched</h1>");
        }

    } catch (error) {
        res.status(400).send("<h1>Something Went Wrong..........</h1>");
    }
});

// /// login finished////

router.get("/otp", (req, res) => {
    res.render("otp");
});
router.get("/submit", (req, res) => {
    res.render("submit");
});

module.exports = router;
