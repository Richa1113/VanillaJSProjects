// local review data
const review = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: '../Pictures/download.jfif',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: '../Pictures/download (1).jfif',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: '../Pictures/download (2).jfif',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: '../Pictures/download (3).jfif',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      },
];

// select items
const personImg = document.getElementById("person-1");
const personName = document.getElementById("author");
const personJob = document.getElementById("job");
const personInfo = document.getElementById("info");

const prevBtn = document.body.querySelector(".prev-btn");
const nextBtn = document.body.querySelector(".next-btn");
const randomBtn = document.body.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function(){
  //console.log("shake and bake");
   showPerson(currentItem);
});

//show person function
function showPerson(person){
  const item = review[person];
  personImg.src = item.img;
  personName.textContent = item.name;
  personJob.textContent = item.job;
  personInfo.textContent = item.text;
};

//show next person
nextBtn.addEventListener("click", function(){
  currentItem++;
  if(currentItem > review.length-1){
    currentItem = 0;
  };
  showPerson(currentItem);
});

//show previous person
prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = review.length - 1;
  }
  showPerson(currentItem);
})

//show random person
randomBtn.addEventListener("click", function(){
  let randomnumber = Math.floor(Math.random()*review.length);
  showPerson(randomnumber);
})

