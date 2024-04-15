const colours = ["red", "green", "#72b763", "#b463b7"];
const button = document.getElementById("btn");
const TextSpan = document.body.querySelector(".color");

button.addEventListener("click", function(e){
    // fixed number of colours showing
    //we need random number between 0 to 3
    const randomNumber = Math.floor(Math.random()*colours.length);
    document.body.style.backgroundColor = colours[randomNumber];
    TextSpan.textContent = colours[randomNumber];
});