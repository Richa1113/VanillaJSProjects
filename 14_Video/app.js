//MDN
//The DOMContentLoaded event fires when the initial html document has been completely loaded and parsed, without waiting for stylesheets, images and subframes to finish loading
//The load event has fired when the whole page has loaded, including all dependent resources such as stylesheets and images

//slsecting parent elements
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

//btn event
btn.addEventListener("click", function(){
    //console.log(btn.classList);
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }
    else{
        btn.classList.remove("slide");
        video.play();
    }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});