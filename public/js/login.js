
var phone = document.getElementById('contact-error');
function convalidation(){
	var contact=document.getElementById("form").value;
          if(contact==""){
            // phone.innerHTML="contact is required";
            alert("Please enter your Contact");
          }
          else{
			var regex=/^\d{10}$/;
            if(regex.test(contact)==false){
              //  phone.innerHTML="enter must be a number only";
                alert("Please enter valid contact");
            }
			else{
				document.getElementById("myform").action = "otp1.html";
	 }

}}