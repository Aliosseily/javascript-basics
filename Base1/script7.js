console.log("hiiiii")

var shoe = document.getElementById("shoe_size")
var year = document.getElementById("year")
var btn = document.getElementById("validate")
var res = document.getElementById("result")


function Calculate(event){
    event.preventDefault();
res.innerHTML=(shoe.value)*2+5*50-(year.value)+1766

}

btn.addEventListener(`click` ,Calculate)