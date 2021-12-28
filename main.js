console.log("Hello world !!!");

function printamessage() {
    alert("Unfortunantely. we are not currently open for suggestions. If you have any questions, comments or concerns, keep them to yourself. If you have a turtle named Tuck, tell him hi for me.");
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

function changetitle(){
    document.getElementById("title").innerHTML = "Tea & Puppies";
}
