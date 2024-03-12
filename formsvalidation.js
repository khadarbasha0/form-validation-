var nameError = document.getElementById("name-error");
var PhoneError = document.getElementById("Phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
function validationName() {
    var name = document.getElementById("contact-name").value;


    if (name.length == 0) {
        nameError.innerHTML = "Name required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "write full name";
        return false;
    }
    nameError.innerHTML = `<i class="fa-solid fa-square-check"></i>`
    return true;

}
// phone ...

function validationphone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        PhoneError.innerHTML = 'phone 0-9 is required'
        return false;
    }
    if(phone.length != 10){
        PhoneError.innerHTML = 'Only digits'
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        PhoneError.innerHTML = 'Only digits'
        return false;
    }
    PhoneError.innerHTML = `<i class="fa-solid fa-square-check"></i>`
    return true;
}1

function validationemail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0 ){
        emailError.innerHTML = 'Email required';
        return false; 
    }else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;

    }
    emailError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true; 

}

function validationMessage(){
    var msg = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - msg.length;

    if(left>0){
        messageError.innerHTML=  left + "more characters required"
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validateForm(){

    if(!validationName() || !validationphone() || !validationemail() || !validationMessage()){

        submitError.style.display = "block";

        submitError.innerHTML = "Please fix error to submit"
        setTimeout(()=>{submitError.style.display = "none";},2000)
        return false;
    }

}






