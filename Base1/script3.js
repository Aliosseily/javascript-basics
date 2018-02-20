console.log("third")

var nom = document.getElementById("name")
var btn = document.getElementById("submit")
function Show(){

  alert(`Hello`+` `+nom.value)  
}
btn.addEventListener(`click`, Show)
