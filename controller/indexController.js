// const User = require('../model/user');
const path=require('path');
exports.homePage = (request,response)=>{
    // console.log(user_id);

    response.render("user-module/index");
};
exports.aboutPage = (request,response)=>{
    response.render("user-module/about");
};

exports.contactPage = (request,response)=>{
    response.render("user-module/contact.ejs");
};

exports.QuotationPage = (request,response)=>{
    response.render("user-module/Quotation.ejs");
};

exports.ServicePage = (request,response)=>{
    response.render("user-module/services.ejs");
};
exports.VehicleAttach = (request,response)=>{
    console.log(Mobile);
    response.render("user-module/vehicleAttach1",{Mobile});
};

exports.VehicleAttach2 = (request,response)=>{
    console.log(Mobile);
    response.render("user-module/vehicleAttach2.ejs",{Mobile});
};

