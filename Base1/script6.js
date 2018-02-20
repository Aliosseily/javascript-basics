console.log("sixth")

var a = document.getElementById("first_number")
var b = document.getElementById("second_number")
var btn = document.getElementById("validate")
var res = document.getElementById("result")


function Devide(event){
    event.preventDefault();
res.innerHTML=(a.value/b.value);
}
btn.addEventListener(`click` ,Devide)
