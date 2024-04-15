const inputValue = document.querySelector(".txt");
const btns = document.querySelectorAll(".btn");
let string = "";

Array.from(btns).forEach(function(btn){
    btn.addEventListener("click", function(e){
        e.preventDefault();
        //console.log("shake n bake");
        //console.log(btn.innerHTML);
        //inputValue.textContent = btn.innerHTML;
            if(btn.innerHTML == "=")
            try{
                string = eval(string);
                inputValue.value = string;
                //clearInput();
             }
             catch(e){
                inputValue.value = "error";
                string = "";
             }
             else if(btn.innerHTML == "C"){
                 string = "";
                 inputValue.value = string;
             }
             else if(btn.innerHTML == "%")
             try{
                 string = (eval(string))/100;
                 inputValue.value = string;
             }
             catch(e){
                inputValue.value = "error";
                string = "";
             }
             else{
             string = string + btn.innerHTML;
             inputValue.value = string;
             }
        
    })
})

function clearInput(){
    string = "";
}

