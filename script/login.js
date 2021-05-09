console.log("Hello");
localStorage.clear();
localStorage.setItem("email", "adminLogin@heraldcollege.edu.np");
localStorage.setItem("password", "adminLogin");


var inputEmail =document.getElementById("email-input");
var inputPassword= document.getElementById("password-input");
var btnInput=document.getElementById("btn");


var email=localStorage.getItem("email");
var password=localStorage.getItem("password");
console.log(email,password);

function myFunction() {
    
    const key=inputEmail;
    const val=inputPassword;
    console.log(key);
    console.log(val);

}