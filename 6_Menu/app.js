//get only unique categories - HARDEST ONE
//iterate over categories return button
//make sure select buttons when they are available

//items
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "../Pictures/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "../Pictures/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "../Pictures/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "../Pictures/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "../Pictures/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "../Pictures/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "../Pictures/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "../Pictures/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "../Pictures/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "../Pictures/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "no no steak",
      category: "dessert",
      price: 22.99,
      img: "../Pictures/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
 
  //get parent elements
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  window.addEventListener("DOMContentLoaded", function(){
      displayMenuItem(menu);
      displayMenuButtons();
    });

  function displayMenuItem(menuItem){
    let displayMenu = menuItem.map(function (item) {
      //console.log(item);
      return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
      </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
  }

  function displayMenuButtons(){
    const categories = menu.reduce(function(values, item){
      if(!values.includes(item.category)){
          values.push(item.category);
      };
      return values;
   }, ["all"]);
   //console.log(categories);
   
   const categoryBtns = categories.map(function(item){
     return `<button class="filter-btn" data-id="${item}">${item}</button>`;
   }).join("");
   //console.log(categoryBtns);
   btnContainer.innerHTML = categoryBtns;
   const filterBtns = document.querySelectorAll(".filter-btn");
   //console.log(filterBtns);
   filterBtns.forEach(function(btn){
     btn.addEventListener("click", function(currentBtn){
       let category = currentBtn.currentTarget.dataset.id;
       let menuItmesCategory = menu.filter(function(menuItem){
         if(menuItem.category === category){
           //console.log(menuItem);
           //displayMenuItem(menuItem);
           return menuItem;
         }
       })
       if(category === "all"){
         displayMenuItem(menu);
       }
       else{
       displayMenuItem(menuItmesCategory);
       }
     })
   })
  }
  