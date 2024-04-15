const button = document.getElementById("submitBtn");
const BMIform = document.querySelector(".BMIForm");
const result = document.getElementById("results");
const range = document.getElementById("range");


BMIform.addEventListener("submit", submit);

function submit(e) {
    e.preventDefault();
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    //console.log(height);
    //console.log(weight);
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight`;
    }
    else{
        const BMI = (weight) / ((height * height) / 10000).toFixed(2);
        //console.log(BMI);
        result.innerHTML = `Your BMI is ${BMI}`;
        RangeMessage(BMI);
    }

    setBackToDefault();
}

function RangeMessage(bmi){
    if(bmi < 18.6){
        //range.innerHTML = `You are under weight`;
        rangeColour("You are under weight", "danger");

    }
    else if(bmi > 18.6 && bmi < 24.9){
        //range.innerHTML = `Your weight is in normal range`;
        rangeColour("Your weight is in normal range", "success");
    }
    else{
        //range.innerHTML = `You are overweight`;
        rangeColour("You are overweight", "danger");
    }
}

function rangeColour(text, action){
    range.innerHTML = text;
    if(action === "success"){
        range.classList.add(`alert-success`);
        range.classList.remove(`alert-danger`);
    }
    else if(action === "danger"){
        range.classList.add(`alert-danger`);
        range.classList.remove(`alert-success`);
    }
    //range.classList.add(`alert-${action}`);
}

function setBackToDefault(){
    height.value = "";
    weight.value = "";
}

