// Form validation

const form  = document.getElementById("form");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error");
const icon = document.getElementById('icon')
const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(){
    if(!email.value.match(pattern)){
        errorMessage.textContent = "Please provide a valid email address";
        email.style.borderColor = "hsl(0, 93%, 68%)";
        icon.style.display = "block";
        return false;
    } 
    errorMessage.textContent = " ";
    email.style.borderColor = "";
    icon.style.display = "none";
        return true;
};


