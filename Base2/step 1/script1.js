console.log("first")



var image = document.querySelector("#image1"); 
console.log(image)
function handler() {
    this.src = 'images/image1_2.jpg';
} 
function out() {
    this.src = 'images/image1.jpg';
} 
   
        image.addEventListener('mouseover', handler);  


        image.addEventListener('mouseout', out);  
     