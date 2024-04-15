// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    //console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    //console.log(linksHeight);
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }

})

// ********** fixed navbar ************

const nav = document.getElementById("nav");   //pageYOffset property is depricated. project sroll in in build 15 js projects- vanilla js projects

window.addEventListener("scroll", function(){
  //console.log(nav.classList);
  if(!nav.classList.contains("fixed-nav")){
       nav.classList.toggle("fixed-nav");
  }  
})