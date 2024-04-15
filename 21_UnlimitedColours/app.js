const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");

// startBtn.addEventListener("click", function(){
//     //colours can be taken as #a76765
//     let hexColour = "#";
//     for(let i=0; i < 6; i++){
//         hexColour += hex[getRandomNumber()]; 
//     }
//     document.body.style.backgroundColor = hexColour;
// })
let intervalId;
startBtn.addEventListener("click", function(){
    if(!intervalId){
    intervalId = setInterval(colourchanger, 1000);
    }
})

stopBtn.addEventListener("click", function(){
    clearInterval(intervalId);
    intervalId = null;
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
 }

const colourchanger = function(){
    //colours can be taken as #a76765
    let hexColour = "#";
    for(let i=0; i < 6; i++){
        hexColour += hex[getRandomNumber()]; 
    }
    document.body.style.backgroundColor = hexColour;
}