console.log("forth")

var a = document.getElementById("name")
var b = document.getElementById("surname")
var c = document.getElementById("city") 
var d = document.getElementById("validate")
function Show(){
    alert(`Name: `+a.value +`\n`+`Surname: `+b.value+`\n`+`City: `+c.value)
    
}

d.addEventListener(`click`,Show)