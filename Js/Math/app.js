// console.log(Math.floor(Math.random() * 6 + 1));

var image = document.getElementById('img');


var image1 = "./images/dice 1.webp"
var image2 = "./images/dice 2.webp"
var image3 = "./images/dice 3.webp"
var image4 = "./images/dice 4.webp"
var image5 = "./images/dice 5.webp"
var image6 = "./images/dice 6.webp"


function dice() {
    var num = Math.floor(Math.random() * 6) + 1;
     
    if(num === 1){
        image.src = image1
    }
    else if(num === 2){
        image.src = image2
    }
    else if(num === 3){
        image.src = image3
    }
    else if(num === 4){
        image.src = image4;
    }
    else if(num === 5){
        image.src = image5;
    }
    else if(num === 6){
        image.src = image6;
    }
};






