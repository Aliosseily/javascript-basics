console.log("first")

var image = document.querySelector("#image1")


function AddBorder() {
    image.style.border = "3px solid red ";
    
}
image.addEventListener('mouseover', AddBorder)