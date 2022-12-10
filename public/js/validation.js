//---------------------Username validation-----------------------//
userCheck = () => {
  let submit = document.getElementById("submit")

  let userName = document.getElementById("Name").value;

  if (userName.trim() === "") {
    document.getElementById('user').innerHTML = " **please fill name";
    submit.setAttribute('disabled', '');
    // return false;
    submit.removeAttribute('disabled')
  }
  else if (!isNaN(userName)) {
    document.getElementById("user").innerHTML = "**Name is Not valid"
    submit.setAttribute('disabled', '');
    // return false;
    submit.removeAttribute('disabled')
  }
  else if ((userName.length <= 2) || (userName.length > 20)) {
    document.getElementById('user').innerHTML = " **character must be between 3 to 20";
    submit.setAttribute('disabled', '');
    // return false;
  }
  else {
    document.getElementById("user").innerHTML = "";
    // return true;
    submit.removeAttribute('disabled')
  }
}

//---------------------Mobile NO validation-----------------------//

mobileCheck = () => {
  let submit = document.getElementById("submit")

  let mobile_no = document.getElementById("Contact").value;
  if (mobile_no.trim() == "") {
    document.getElementById('mobile').innerHTML = " **please fill mobile number";
    submit.setAttribute('disabled', '');
    // return false;
  }
  else if (isNaN(mobile_no)) {
    document.getElementById('mobile').innerHTML = "**please Enter Valid mobile no";
    submit.setAttribute('disabled', '');
    // return false;
  }
  else if (mobile_no.length < 10) {
    document.getElementById('mobile').innerHTML = " **please Enter 10 no. digit";
    submit.setAttribute('disabled', '');
    // return false;
  }

  else {
    document.getElementById('mobile').innerHTML = "";
    submit.removeAttribute('disabled')
    // return true;
  }
}

//---------------------Password validation-----------------------//

passCheck = () => {
  let submit = document.getElementById("submit")
  let password = document.getElementById("password").value;
  let cPassword = document.getElementById("cPassword").value;

  if (cPassword != password) {
    document.getElementById('passwords').innerHTML = "**Password & Confirm password are not same";
    submit.setAttribute('disabled', '');
  }
  else if (cPassword == "") {
    document.getElementById('passwords').innerHTML = "";
    submit.setAttribute('disabled', '');
  }
  else {
    document.getElementById('passwords').innerHTML = "";
    submit.removeAttribute('disabled')
  }
}

destLocation = () => {
  let submit = document.getElementById("submit")
  let pickUpLocation = document.getElementById("pickuplocation").value
  let destLocation = document.getElementById("destlocation").value

  if (pickUpLocation == destLocation) {
    document.getElementById('location').innerHTML = "**Pick up & delivery location can't be same";
    submit.setAttribute('disabled', '');
    // return false;
  }
  else if (destLocation == "") {
    document.getElementById('location').innerHTML = "";
    submit.setAttribute('disabled', '');
    // return false;
  }
  else {
    document.getElementById('location').innerHTML = "";
    // return true;
    submit.removeAttribute('disabled')
  }
}

destmobileCheck = () => {
  let submit = document.getElementById("submit")

  let mobile_no = document.getElementById("destcontact").value;

  if (mobile_no.trim() == "") {
    document.getElementById('destmobile').innerHTML = " **please fill mobile number";
    submit.setAttribute('disabled', '');
    // return false;
  }
  else if (isNaN(mobile_no)) {
    document.getElementById('destmobile').innerHTML = "**please Enter Valid mobile no";
    submit.setAttribute('disabled', '');
    // return false;
  }
  else if (mobile_no.length < 10) {
    document.getElementById('destmobile').innerHTML = " **please Enter 10 no. digit";
    submit.setAttribute('disabled', '');
    // return false;
  }
  else {
    document.getElementById('destmobile').innerHTML = "";
    //return true;
    submit.removeAttribute('disabled')
  }
}
confirm = () => {
  if (destLocation() && destmobileCheck() && mobileCheck()) {
    submit.removeAttribute('disabled')
  }
}

//---------------------Driver validation-----------------------//
userDriverCheck = () => {

  let submit = document.getElementById("submit")
  let userName = document.getElementById("driver").value;

  if (userName.trim() === "") {
    document.getElementById('Driver').innerHTML = " **please fill name";
    submit.setAttribute('disabled', '');
  }
  else if (!isNaN(userName)) {
    document.getElementById("Driver").innerHTML = "**Name is Not valid"
    submit.setAttribute('disabled', '');
  }
  else if ((userName.length <= 2) || (userName.length > 20)) {
    document.getElementById('Driver').innerHTML = " **character must be between 3 to 20";
    submit.setAttribute('disabled', '');
  }
  else {
    document.getElementById("Driver").innerHTML = "";
    submit.removeAttribute('disabled')
  }
}

adharCheck = () => {
  let submit = document.getElementById("submit")
  let adhar = document.getElementById("adharnumber").value;

  if (adhar.trim() == "") {
    document.getElementById('aadharNumber').innerHTML = "**please fill adhar number";
    submit.setAttribute('disabled', '');
  }
  else if (isNaN(adhar)) {
    document.getElementById('aadharNumber').innerHTML = "**please Enter Valid number";
    submit.setAttribute('disabled', '');
  }

  else if (adhar.length < 12) {
    document.getElementById('aadharNumber').innerHTML = "**please Enter 12 no. digit";
    submit.setAttribute('disabled', '');
  }
  else {
    document.getElementById('aadharNumber').innerHTML = "";
    submit.removeAttribute('disabled')
  }
}


vehicleCheck = () => {
  let submit = document.getElementById("submit")
  let vehicleNumber = document.getElementById("vehiclenumber").value;

  let reg = "/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/"
  if (vehicleNumber.trim() == "") {
    document.getElementById('vehicleNumber').innerHTML = "**please fill vehicle number";
    submit.setAttribute('disabled', '');
  }
  else if (!isNaN(vehicleNumber)) {
    document.getElementById('vehicleNumber').innerHTML = "**please Enter Valid number";
    submit.setAttribute('disabled', '');
  }
  else {
    document.getElementById('vehicleNumber').innerHTML = "";
    submit.removeAttribute('disabled')
  }
}
// let submit = document.getElementById("submit")