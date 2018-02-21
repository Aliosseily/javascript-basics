console.log("second")

var show = document.getElementById("show")
var hide = document.getElementById("hide")
var text = document.getElementById("texte")


function showHide(event){ 

if(event == "show"){
    text.style.visibility="visible"
}
else if (event == "hide"){
    text.style.visibility="hidden"
    
}
}
hide.addEventListener("click", () => showHide("hide"))
show.addEventListener("click", () => showHide("show"))