const modalButton = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalButton.addEventListener("click", function(){
    modalOverlay.classList.add("open-modal");
})

closeBtn.addEventListener("click", function(){
    modalOverlay.classList.remove("open-modal");
})