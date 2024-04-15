const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const contents = document.querySelectorAll(".content");

//target is the element that triggered the event (e.g., the user clicked on) currenttarget is the element that the event listener is attached to. It's worth noting that event. target can be useful, for example, for using a single listener to trigger different actions

about.addEventListener("click", function(e){
  const id = e.target.dataset.id;
  //console.log(id);
  if(id){
    // remove active class selected from other buttons
    btns.forEach(function(btn){
        btn.classList.remove("active");
    })
    e.target.classList.add("active");
    //hide other articles
    contents.forEach(function(content){
        content.classList.remove("active");
    })
    const targetContent = document.getElementById(id);
    targetContent.classList.add("active");
  }
})