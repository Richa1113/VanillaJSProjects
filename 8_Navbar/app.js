// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.body.querySelector(".nav-toggle");
const links = document.body.querySelector(".links");

navToggle.addEventListener("click", function(){
    // console.log(links.classList);
    // console.log(links.classList.contains("links"));
    // console.log(links.classList.contains("show-links"));
    // if(links.classList.contains("show-links")){
    //        links.classList.remove("show-links");
    // }
    // else{
    //     links.classList.add("show-links");
    // }
    //aad and remove or by toggle
    links.classList.toggle("show-links");
})