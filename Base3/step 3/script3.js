console.log("third")

var colors = document.getElementsByClassName("color");

var text = document.getElementById("text")


function ChangeColor(color){
if (color=="green"){
    text.style.color="green"
}
else if (color == "red"){
    text.style.color="red"
}
else if (color == "blue"){
    text.style.color="blue"
    
}
}

colors[0].addEventListener('click',() => ChangeColor("green"));
colors[1].addEventListener('click',() => ChangeColor("red"));
colors[2].addEventListener('click',() => ChangeColor("blue"));



