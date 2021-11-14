function next() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var check = document.getElementById("customCheck1").value;
    if (fname !== ""){
        window.location = "../foo/bar.html"
    }
}

function passwordcheck() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    if (fname !== lname){
        alert("Password is incorect.");
    }
}

function ChangeDivMessage() {
    document.getElementById("myparagraph").innerHTML = "jhug";
}

function isCheckboxChecked(){
    if (document.getElementById('customCheck1').checked===false){
      document.getElementById("myparagraph").innerHTML = "You must accept terms and conditions";
    }else{
      document.getElementById("myparagraph").innerHTML = "-";
    }
  }

function deleteElement(){
    document.getElementById("myparagraph").innerHTML = "";
}