const toggleButton = document.body.querySelector(".sidebar-toggle");
const closeButton = document.body.querySelector(".close-btn");
const sidebar = document.body.querySelector(".sidebar");

toggleButton.addEventListener("click", function(){
    //console.log(sidebar.classList);
    sidebar.classList.toggle("show-sidebar");
});

closeButton.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});