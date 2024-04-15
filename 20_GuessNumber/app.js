let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.getElementById("guessField");
const submitBtn = document.querySelector(".guessSubmit");
const startOver = document.querySelector(".resultParas");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrhigh = document.querySelector(".lowOrhigh");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const userGuess = parseInt(userInput.value);
        console.log(randomNumber);
        //console.log(userGuess);
        validateGuess(userGuess);
    })
}

function validateGuess(userGuess) {
    if (isNaN(userGuess)) {
        alert("User input is not a number");
    }
    else if (userGuess < 1) {
        alert("Please give a valid positive number");
    }
    else if (userGuess > 100) {
        alert("Please give a number below or equal to 100")
    }
    else {
        prevGuess.push(userGuess);
        if (numGuess === 10) {
            displayGuess(userGuess);
            displayMessage(`Ooopss! Game over. Random number was: ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(userGuess);
            guessCheck(userGuess);
        }
    }
}

function guessCheck(userGuess) {
    if (userGuess === randomNumber) {
        displayMessage("Wooooowww! You guessed it right");
        endGame();
    }
    else if(userGuess < randomNumber){
        displayMessage("Number is TOOOO low");
    }
    else if(userGuess > randomNumber){
        displayMessage("Number is TOOO high");
    }
}

function displayGuess(userGuess) {
    userInput.value = "";
    guessSlot.innerHTML += `${userGuess},  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message) {
    lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
     playGame = false;
     userInput.value = "";
     userInput.setAttribute("disabled", "");
     p.classList.add("button");
     p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
     startOver.appendChild(p);
     newGame();
}

function newGame() {
   const newGameButton = document.getElementById("newGame");
   newGameButton.addEventListener("click", function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    lowOrhigh.innerHTML = "";
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
   }) 
}