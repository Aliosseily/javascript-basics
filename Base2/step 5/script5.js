console.log("fifth")

function image(){

for(let i = 1 ; i <= 5 ; i++){

    let image = document.querySelector("#image" + i)
    image.addEventListener('mouseover' ,function(){
     image.src="images/image"+i+"_2.jpg"
    })
}

}
image()