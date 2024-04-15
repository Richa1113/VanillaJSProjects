const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const white = document.getElementById("white");

buttons.forEach(function(btns){
    btns.addEventListener("click",function(btn){
        //console.log(btn.currentTarget.id);
        if(btn.currentTarget.id === "red"){
            body.style.backgroundColor = "rgb(220, 104, 104)";
        }
        else if(btn.currentTarget.id === "yellow"){
            body.style.backgroundColor = "#e2e244";
        }
        else if(btn.currentTarget.id === "blue"){
            body.style.backgroundColor = "rgb(92, 92, 220)";
        }
        else{
            body.style.backgroundColor = "white";
        }
    })
})