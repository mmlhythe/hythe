console.log("Hello world !!!");

function printamessage() {
    alert("My name is Bond");
}

var password;
var password1=("000");
password = prompt("Please enter password here");
if (password === password1){
    alert("correct password! Click \"OK\" to enter")
}
else{
    window.location = "https://google.com";
}