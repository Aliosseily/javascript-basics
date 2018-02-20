console.log("sixth")


function OnMouseOver(){

for(let i = 1 ; i <= 5 ; i++){

    let image = document.querySelector("#image" + i)
    image.addEventListener('mouseover' ,function(){
     image.src="images/image"+i+"_2.jpg"
    })
}

}

function OnMouseOut(){
    
    for(let i = 1 ; i <= 5 ; i++){
    
        let image = document.querySelector("#image" + i)
        image.addEventListener('mouseout' ,function(){
         image.src="images/image"+i+".jpg"
        })
    }
    
    }
    OnMouseOver()
    OnMouseOut()