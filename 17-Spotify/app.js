console.log("welcome to spotify");
// let audioElement = new Audio("1.mp3");
// audioElement.muted = true;
// audioElement.play();

// let myAudio = document.querySelector('#audio');
// myAudio.play()

// const playBtn = document.getElementById("playbtn");
//const audioElement = document.getElementById("audio");

const masterPlay = document.getElementById("masterPlay");
const gifr = document.getElementById("gifr");
masterPlay.addEventListener("click", ()=>{
    let audioElement = document.createElement("AUDIO");
    // if (audioElement.canPlayType("audio/mpeg")) {
    //     audioElement.setAttribute("src", "1.mp3");
    //     audioElement.play();
    // }
    audioElement.setAttribute("src", "1.mp3");
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gifr.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        gifr.style.opacity = 0;
    }

})


