let count = 0;

let value = document.getElementById("value");
let button = document.body.querySelectorAll(".btn");

button.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const currentClass = e.currentTarget.classList;
        if(currentClass.contains("decrease")){
            count--;
            value.style.color = "green";
        }
        else if(currentClass.contains("increase")){
            count++;
            value.style.color = "red";
        }
        else{
            count = 0;
            value.style.color = "black";
        };
        // if(count > 0){
        //     value.style.color = "green";
        // }
        // if(count < 0){
        //     value.style.color = "red";
        // }
        // if(count === 0){
        //     value.style.color = "black"
        // }
        value.textContent = count;

    })
})