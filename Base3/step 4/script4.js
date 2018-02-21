console.log("forth")



var pass = document.getElementById("password")
var confirm = document.getElementById("confirmation")
var btn = document.querySelector("button")



function Show(a,b){

a = pass.value;
b = confirm.value;

if(a !== b){

    pass.style.border="3px solid red"
    confirm.style.border="3px solid red"
    

}
}
btn.addEventListener("click", Show)