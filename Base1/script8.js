console.log("eighth")


var btn = document.getElementById("validate");
var age = document.getElementById("age");
var res = document.getElementById("result") 

function Age(event){
    event.preventDefault();
    var a=age.value;
if (a>18){

    res.innerHTML= "you are over 18"
   
}
else if (a<18) {
    res.innerHTML ="you are under 18"
}
else if (a==18) {
    res.innerHTML ="you are between"
}

}
btn.addEventListener(`click` , Age)
