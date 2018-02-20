console.log("forth")

var a = document.getElementById("name")
var b = document.getElementById("surname")
var c = document.getElementById("city")
var btn = document.querySelector("button")

// function Clear(){

// a.value=""
// b.value=""
// c.value=""
// }
function Confirm() {
    
    var answer = confirm("Are you sure you want to reset !!!")
    if (answer == true) {
        a.value=""
        b.value=""
        c.value=""
    }
  }
    btn.addEventListener("click", Confirm)























